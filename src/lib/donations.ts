import type Stripe from "stripe";
import { z } from "zod";

export const donationCheckoutInputSchema = z.object({
  amountInCents: z.number().int().min(500).max(1_000_000),
  donorName: z.string().trim().min(2).max(120).optional(),
  recurring: z.boolean().optional().default(false),
  flow: z.enum(["checkout", "payment_link"]).optional().default("checkout"),
});

export type DonationCheckoutInput = z.infer<typeof donationCheckoutInputSchema>;

export function buildCheckoutSessionPayload(
  input: Pick<DonationCheckoutInput, "amountInCents" | "donorName" | "recurring">,
  siteOrigin: string,
): Stripe.Checkout.SessionCreateParams {
  const recurring = input.recurring ?? false;

  return {
    mode: recurring ? "subscription" : "payment",
    submit_type: "donate",
    success_url: `${siteOrigin}/apoiar?status=success`,
    cancel_url: `${siteOrigin}/apoiar?status=cancelled`,
    customer_creation: "if_required",
    metadata: input.donorName ? { donorName: input.donorName } : undefined,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "brl",
          unit_amount: input.amountInCents,
          product_data: {
            name: recurring
              ? "Doação mensal - Projeto Lucas Shinhe"
              : "Doação única - Projeto Lucas Shinhe",
          },
          recurring: recurring ? { interval: "month" } : undefined,
        },
      },
    ],
  };
}
