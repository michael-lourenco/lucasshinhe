import Link from "next/link";

import { DonationSimulator } from "@/components/donation-simulator";

export default function ApoiarPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:px-10">
        <header className="grid gap-6 border border-zinc-800 bg-[linear-gradient(120deg,_#06090f_15%,_#0f172a_65%,_#06090f_95%)] p-7 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Apoio ao esporte brasileiro
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Apoiar com doação
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200">
              Cada contribuição ajuda o Lucas Shinhe a representar o Brasil no Mundial de
              Sumô com estrutura adequada de viagem, estadia e preparação.
            </p>
          </div>
          <aside className="border border-zinc-800 bg-zinc-950/80 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Destino dos recursos</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• Transporte internacional e deslocamentos</li>
              <li>• Hospedagem e alimentação durante a competição</li>
              <li>• Preparação técnica e suporte competitivo</li>
            </ul>
          </aside>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Meta 01</p>
            <h2 className="mt-2 text-lg font-black uppercase">Viagem</h2>
            <p className="mt-2 text-sm text-zinc-300">Passagens e logística internacional.</p>
          </article>
          <article className="border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Meta 02</p>
            <h2 className="mt-2 text-lg font-black uppercase">Estrutura</h2>
            <p className="mt-2 text-sm text-zinc-300">Hospedagem e alimentação competitiva.</p>
          </article>
          <article className="border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Meta 03</p>
            <h2 className="mt-2 text-lg font-black uppercase">Performance</h2>
            <p className="mt-2 text-sm text-zinc-300">Treino, preparação e suporte de alto nível.</p>
          </article>
        </section>

        <DonationSimulator />

        <section className="border border-zinc-800 bg-[#070b12] p-6">
          <h2 className="text-2xl font-black uppercase">Prefere apoiar como marca?</h2>
          <p className="mt-2 text-zinc-300">
            Empresas podem apoiar com cotas e receber plano de contrapartidas de visibilidade.
          </p>
          <Link
            href="/patrocinar"
            className="mt-5 inline-flex h-11 items-center justify-center border border-zinc-500 px-5 font-bold uppercase tracking-wide transition hover:border-zinc-300"
          >
            Ver proposta para patrocinadores
          </Link>
        </section>
      </div>
    </main>
  );
}
