// @vitest-environment node
import { beforeEach, describe, expect, it } from "vitest";

describe("POST /api/donations/checkout", () => {
  beforeEach(() => {
    delete process.env.MOCK_DONATION_CHECKOUT_URL;
    delete process.env.MOCK_PAYMENT_PROVIDER_NAME;
    delete process.env.STRIPE_DONATION_PAYMENT_LINK_URL;
  });

  it("retorna erro de validação para payload inválido", async () => {
    const { POST } = await import("@/app/api/donations/checkout/route");
    const request = new Request("http://localhost/api/donations/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amountInCents: 100 }),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.ok).toBe(false);
  });

  it("retorna checkout mockado no fluxo payment_link", async () => {
    process.env.MOCK_DONATION_CHECKOUT_URL = "https://pagamento.mock/pay";
    const { POST } = await import("@/app/api/donations/checkout/route");
    const request = new Request("http://localhost/api/donations/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amountInCents: 5000, flow: "payment_link" }),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.flow).toBe("payment_link");
    expect(json.mode).toBe("mock");
    expect(json.checkoutUrl).toContain("https://pagamento.mock/pay");
    expect(json.checkoutUrl).toContain("amount=5000");
  });

  it("retorna checkout mockado também para fluxo checkout", async () => {
    process.env.MOCK_PAYMENT_PROVIDER_NAME = "MockSponsorPay";
    const { POST } = await import("@/app/api/donations/checkout/route");
    const request = new Request("http://localhost/api/donations/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json", origin: "https://lucasshinhe.org" },
      body: JSON.stringify({
        amountInCents: 6500,
        donorName: "Apoiador Exemplo",
        recurring: true,
      }),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.mode).toBe("mock");
    expect(json.flow).toBe("checkout");
    expect(json.provider).toBe("MockSponsorPay");
    expect(json.checkoutUrl).toContain("mock=1");
    expect(json.checkoutUrl).toContain("recurring=true");
  });
});
