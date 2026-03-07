export type DonationRecord = {
  eventId: string;
  sessionId: string;
  amountTotal: number;
  currency: string;
  paymentStatus: string;
  donorEmail: string | null;
  createdAt: string;
};

type CheckoutLikeSession = {
  id?: string;
  amount_total?: number | null;
  currency?: string | null;
  payment_status?: string | null;
  customer_details?: {
    email?: string | null;
  } | null;
};

const processedEventIds = new Set<string>();
const donations: DonationRecord[] = [];

export function registerWebhookEvent(eventId: string) {
  if (processedEventIds.has(eventId)) {
    return { duplicate: true as const };
  }

  processedEventIds.add(eventId);
  return { duplicate: false as const };
}

export function persistDonationFromCheckout(
  eventId: string,
  session: CheckoutLikeSession,
): DonationRecord | null {
  if (!session.id || session.payment_status !== "paid") {
    return null;
  }

  const donation: DonationRecord = {
    eventId,
    sessionId: session.id,
    amountTotal: session.amount_total ?? 0,
    currency: session.currency ?? "unknown",
    paymentStatus: session.payment_status,
    donorEmail: session.customer_details?.email ?? null,
    createdAt: new Date().toISOString(),
  };

  donations.push(donation);
  return donation;
}

export function getDonationLedgerSnapshot() {
  return {
    processedEventIds: [...processedEventIds],
    donations: [...donations],
  };
}

export function resetDonationLedger() {
  processedEventIds.clear();
  donations.length = 0;
}
