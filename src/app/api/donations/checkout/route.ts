import { NextResponse } from "next/server";

import { donationCheckoutInputSchema } from "@/lib/donations";

const defaultSiteUrl = "http://localhost:3000";
const defaultMockCheckoutUrl = "https://mock-payments.local/checkout";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = donationCheckoutInputSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const input = parsed.data;
  const siteOrigin =
    request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
  const mockProvider = process.env.MOCK_PAYMENT_PROVIDER_NAME ?? "MockPay";
  const mockCheckoutBaseUrl =
    process.env.MOCK_DONATION_CHECKOUT_URL ?? process.env.STRIPE_DONATION_PAYMENT_LINK_URL;

  const mockCheckoutUrl = new URL(mockCheckoutBaseUrl ?? defaultMockCheckoutUrl);
  mockCheckoutUrl.searchParams.set("mock", "1");
  mockCheckoutUrl.searchParams.set("amount", String(input.amountInCents));
  mockCheckoutUrl.searchParams.set("recurring", String(Boolean(input.recurring)));
  if (input.donorName) {
    mockCheckoutUrl.searchParams.set("donorName", input.donorName);
  }
  mockCheckoutUrl.searchParams.set("successUrl", `${siteOrigin}/apoiar?status=success`);
  mockCheckoutUrl.searchParams.set("cancelUrl", `${siteOrigin}/apoiar?status=cancelled`);

  return NextResponse.json({
    ok: true,
    provider: mockProvider,
    mode: "mock",
    flow: input.flow,
    checkoutUrl: mockCheckoutUrl.toString(),
  });
}
