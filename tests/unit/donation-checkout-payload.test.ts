import { describe, expect, it } from "vitest";

import { buildCheckoutSessionPayload } from "@/lib/donations";

describe("buildCheckoutSessionPayload", () => {
  it("monta payload de pagamento único para checkout", () => {
    const payload = buildCheckoutSessionPayload(
      {
        amountInCents: 7500,
        donorName: "Apoiador Teste",
        recurring: false,
      },
      "https://lucasshinhe.org",
    );

    expect(payload.mode).toBe("payment");
    expect(payload.success_url).toContain("/apoiar?status=success");
    expect(payload.cancel_url).toContain("/apoiar?status=cancelled");
    expect(payload.line_items?.[0]?.price_data?.unit_amount).toBe(7500);
  });

  it("monta payload de doação recorrente quando solicitado", () => {
    const payload = buildCheckoutSessionPayload(
      {
        amountInCents: 5000,
        recurring: true,
      },
      "https://lucasshinhe.org",
    );

    expect(payload.mode).toBe("subscription");
    expect(payload.line_items?.[0]?.price_data?.recurring?.interval).toBe("month");
  });
});
