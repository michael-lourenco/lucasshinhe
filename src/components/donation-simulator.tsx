"use client";

import { FormEvent, useMemo, useState } from "react";

type DonationResponse = {
  ok: boolean;
  mode?: string;
  provider?: string;
  checkoutUrl?: string;
  error?: string;
};

const amountOptions = [2500, 5000, 10000, 20000];

export function DonationSimulator() {
  const [amountInCents, setAmountInCents] = useState(5000);
  const [recurring, setRecurring] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DonationResponse | null>(null);

  const formattedAmount = useMemo(
    () =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amountInCents / 100),
    [amountInCents],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/donations/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amountInCents,
          recurring,
          donorName: donorName.trim() || undefined,
          flow: "checkout",
        }),
      });

      const json = (await response.json()) as DonationResponse;
      setResult(json);
    } catch {
      setResult({
        ok: false,
        error: "Falha de conexão ao iniciar doação mockada.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="border border-zinc-800 bg-[#060a11] p-6 md:p-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
          Fluxo de Pagamento Mockado
        </p>
        <h2 className="text-2xl font-black uppercase">Simule uma doação agora</h2>
        <p className="text-zinc-300">
          Nesta fase, a cobrança real está desativada. O objetivo é validar UX e conversão.
        </p>
      </div>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <label className="block space-y-2">
          <span className="text-sm text-zinc-300">Seu nome (opcional)</span>
          <input
            className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-300"
            name="donorName"
            placeholder="Ex.: Maria Souza"
            value={donorName}
            onChange={(event) => setDonorName(event.target.value)}
          />
        </label>

        <div className="space-y-2">
          <p className="text-sm text-zinc-300">Escolha um valor</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {amountOptions.map((option) => {
              const selected = option === amountInCents;
              return (
                <button
                  key={option}
                  type="button"
                  className={`border px-3 py-2 text-sm font-semibold transition ${
                    selected
                      ? "border-amber-300 bg-amber-300/10 text-amber-200"
                      : "border-zinc-700 bg-zinc-950 text-zinc-200 hover:border-zinc-500"
                  }`}
                  onClick={() => setAmountInCents(option)}
                >
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(option / 100)}
                </button>
              );
            })}
          </div>
        </div>

        <label className="flex items-center gap-3 border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-200">
          <input
            type="checkbox"
            checked={recurring}
            onChange={(event) => setRecurring(event.target.checked)}
          />
          Transformar em doação mensal
        </label>

        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center border border-amber-300 bg-amber-300 px-6 font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isLoading}
        >
          {isLoading ? "Simulando checkout..." : `Doar ${formattedAmount}`}
        </button>
      </form>

      {result && (
        <div className="mt-6 border border-zinc-700 bg-zinc-950 p-4 text-sm">
          {result.ok ? (
            <div className="space-y-2">
              <p className="font-semibold text-amber-300">
                Checkout simulado com {result.provider ?? "MockPay"}.
              </p>
              <a
                href={result.checkoutUrl}
                className="text-amber-200 underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                Abrir URL mockada de pagamento
              </a>
            </div>
          ) : (
            <p className="text-red-300">{result.error ?? "Falha ao simular pagamento."}</p>
          )}
        </div>
      )}
    </section>
  );
}
