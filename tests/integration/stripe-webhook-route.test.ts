// @vitest-environment node
import { beforeEach, describe, expect, it, vi } from "vitest";

import { getDonationLedgerSnapshot, resetDonationLedger } from "@/lib/donation-ledger";

const constructEventMock = vi.fn();

vi.mock("@/lib/stripe", () => ({
  getStripeServerClient: () => ({
    webhooks: {
      constructEvent: constructEventMock,
    },
  }),
}));

describe("POST /api/stripe/webhook", () => {
  beforeEach(() => {
    constructEventMock.mockReset();
    process.env.STRIPE_WEBHOOK_SECRET = "whsec_test_secret";
    resetDonationLedger();
  });

  it("retorna 400 quando assinatura não é enviada", async () => {
    const { POST } = await import("@/app/api/stripe/webhook/route");
    const request = new Request("http://localhost/api/stripe/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.ok).toBe(false);
  });

  it("retorna 400 quando stripe rejeita a assinatura", async () => {
    constructEventMock.mockImplementation(() => {
      throw new Error("Invalid signature");
    });

    const { POST } = await import("@/app/api/stripe/webhook/route");
    const request = new Request("http://localhost/api/stripe/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": "t=1,v1=fake",
      },
      body: JSON.stringify({ id: "evt_test" }),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.ok).toBe(false);
  });

  it("retorna 200 quando evento checkout.session.completed é válido", async () => {
    constructEventMock.mockReturnValue({
      id: "evt_123",
      type: "checkout.session.completed",
      data: {
        object: {
          id: "cs_test_123",
          amount_total: 6500,
          currency: "brl",
          payment_status: "paid",
          customer_details: {
            email: "apoio@exemplo.com",
          },
        },
      },
    });

    const { POST } = await import("@/app/api/stripe/webhook/route");
    const request = new Request("http://localhost/api/stripe/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": "t=1,v1=fake",
      },
      body: JSON.stringify({ id: "evt_123" }),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.eventType).toBe("checkout.session.completed");
    expect(json.duplicate).toBe(false);

    const snapshot = getDonationLedgerSnapshot();
    expect(snapshot.processedEventIds).toContain("evt_123");
    expect(snapshot.donations).toHaveLength(1);
    expect(snapshot.donations[0]).toMatchObject({
      eventId: "evt_123",
      sessionId: "cs_test_123",
      amountTotal: 6500,
      currency: "brl",
      donorEmail: "apoio@exemplo.com",
      paymentStatus: "paid",
    });
  });

  it("não duplica processamento para o mesmo event.id", async () => {
    constructEventMock.mockReturnValue({
      id: "evt_repeat",
      type: "checkout.session.completed",
      data: {
        object: {
          id: "cs_repeat",
          amount_total: 7000,
          currency: "brl",
          payment_status: "paid",
          customer_details: {
            email: "duplicado@exemplo.com",
          },
        },
      },
    });

    const { POST } = await import("@/app/api/stripe/webhook/route");
    const firstRequest = new Request("http://localhost/api/stripe/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": "t=1,v1=fake",
      },
      body: JSON.stringify({ id: "evt_repeat" }),
    });

    const secondRequest = new Request("http://localhost/api/stripe/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": "t=1,v1=fake",
      },
      body: JSON.stringify({ id: "evt_repeat" }),
    });

    const firstResponse = await POST(firstRequest);
    const secondResponse = await POST(secondRequest);
    const firstJson = await firstResponse.json();
    const secondJson = await secondResponse.json();

    expect(firstResponse.status).toBe(200);
    expect(firstJson.duplicate).toBe(false);
    expect(secondResponse.status).toBe(200);
    expect(secondJson.duplicate).toBe(true);

    const snapshot = getDonationLedgerSnapshot();
    expect(snapshot.processedEventIds).toContain("evt_repeat");
    expect(snapshot.donations).toHaveLength(1);
  });
});
