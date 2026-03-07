import { afterEach, describe, expect, it } from "vitest";

import {
  getDonationLedgerSnapshot,
  persistDonationFromCheckout,
  registerWebhookEvent,
  resetDonationLedger,
} from "@/lib/donation-ledger";

describe("donation ledger", () => {
  afterEach(() => {
    resetDonationLedger();
  });

  it("marca event.id como duplicado no segundo processamento", () => {
    const first = registerWebhookEvent("evt_same");
    const second = registerWebhookEvent("evt_same");

    expect(first.duplicate).toBe(false);
    expect(second.duplicate).toBe(true);
  });

  it("persiste doação somente quando sessão está paga", () => {
    const paid = persistDonationFromCheckout("evt_paid", {
      id: "cs_paid",
      amount_total: 5000,
      currency: "brl",
      payment_status: "paid",
      customer_details: { email: "pagante@exemplo.com" },
    });

    const unpaid = persistDonationFromCheckout("evt_unpaid", {
      id: "cs_unpaid",
      amount_total: 5000,
      currency: "brl",
      payment_status: "unpaid",
    });

    const snapshot = getDonationLedgerSnapshot();

    expect(paid).not.toBeNull();
    expect(unpaid).toBeNull();
    expect(snapshot.donations).toHaveLength(1);
    expect(snapshot.donations[0].eventId).toBe("evt_paid");
  });
});
