import { NextResponse } from "next/server";

import { persistDonationFromCheckout, registerWebhookEvent } from "@/lib/donation-ledger";
import { getStripeServerClient } from "@/lib/stripe";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      {
        ok: false,
        error: "Assinatura ou segredo do webhook ausente.",
      },
      { status: 400 },
    );
  }

  const rawBody = await request.text();

  try {
    const stripe = getStripeServerClient();
    const event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    const idempotency = registerWebhookEvent(event.id);

    if (idempotency.duplicate) {
      return NextResponse.json({
        ok: true,
        duplicate: true,
        eventId: event.id,
        eventType: event.type,
      });
    }

    switch (event.type) {
      case "checkout.session.completed": {
        persistDonationFromCheckout(event.id, event.data.object);
        break;
      }
      case "checkout.session.async_payment_succeeded":
      case "checkout.session.async_payment_failed":
        break;
      default:
        break;
    }

    return NextResponse.json({
      ok: true,
      duplicate: false,
      eventId: event.id,
      eventType: event.type,
    });
  } catch (error) {
    console.error("Falha na validação do webhook Stripe:", error);
    return NextResponse.json({ ok: false, error: "Webhook inválido." }, { status: 400 });
  }
}
