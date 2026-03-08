import Link from "next/link";

import { ImmersiveMediaSlot } from "@/components/immersive-media-slot";
import { mediaStorySections } from "@/lib/media-showcase";

export default function PatrocinarPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:px-10">
        <header className="grid gap-6 border border-zinc-800 bg-[linear-gradient(120deg,_#06090f_15%,_#0f172a_65%,_#06090f_95%)] p-7 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Captação B2B
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Quero patrocinar
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200">
              Associe sua marca a um atleta jovem, disciplinado e campeão brasileiro, com
              potencial internacional e narrativa forte de impacto social.
            </p>
          </div>
          <aside className="border border-zinc-800 bg-zinc-950/80 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Posicionamento</p>
            <p className="mt-3 text-sm text-zinc-300">
              Patrocinar Lucas é conectar sua marca com desempenho, juventude e meritocracia.
            </p>
          </aside>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Cota Bronze</p>
            <h2 className="mt-2 text-xl font-black uppercase">Apoiador</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Menção no site oficial</li>
              <li>• Logo em card de agradecimento</li>
              <li>• Atualizações de resultados</li>
            </ul>
          </article>
          <article className="border border-amber-300 bg-amber-300/10 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Cota Prata</p>
            <h2 className="mt-2 text-xl font-black uppercase">Parceiro Oficial</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-200">
              <li>• Todos os benefícios da Bronze</li>
              <li>• Destaque em seção de patrocinadores</li>
              <li>• Conteúdo co-branded em campanhas</li>
            </ul>
          </article>
          <article className="border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Cota Ouro</p>
            <h2 className="mt-2 text-xl font-black uppercase">Patrocinador Master</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Todos os benefícios anteriores</li>
              <li>• Exposição principal da marca</li>
              <li>• Ações especiais e ativações dedicadas</li>
            </ul>
          </article>
        </section>

        <section className="border border-zinc-800 bg-[#070b12] p-6">
          <h2 className="text-2xl font-black uppercase">Manifestar interesse</h2>
          <p className="mt-2 text-zinc-300">
            Envie sua proposta e retornaremos com plano customizado para a sua marca.
          </p>
          <form className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="space-y-1">
              <span className="text-sm text-zinc-300">Empresa</span>
              <input
                className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-300"
                placeholder="Nome da empresa"
                name="companyName"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-zinc-300">Responsável</span>
              <input
                className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-300"
                placeholder="Nome do contato"
                name="contactName"
              />
            </label>
            <label className="space-y-1 md:col-span-2">
              <span className="text-sm text-zinc-300">E-mail corporativo</span>
              <input
                className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-300"
                placeholder="contato@empresa.com.br"
                type="email"
                name="email"
              />
            </label>
            <label className="space-y-1 md:col-span-2">
              <span className="text-sm text-zinc-300">Mensagem</span>
              <textarea
                className="min-h-32 w-full border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-300"
                placeholder="Conte seu objetivo de patrocínio e orçamento estimado."
                name="message"
              />
            </label>
            <div className="md:col-span-2">
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center border border-amber-300 bg-amber-300 px-6 font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-200"
              >
                Enviar interesse (UI mockada)
              </button>
            </div>
          </form>
        </section>

        <section className="space-y-4 border border-zinc-800 bg-zinc-950/50 p-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Assets de marca</p>
            <h2 className="text-2xl font-black uppercase">Imersão para patrocinadores</h2>
            <p className="text-zinc-300">
              Inclua vídeos de impacto e fotos de competição para reforçar valor de exposição.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {mediaStorySections[1].assets.map((asset) => (
              <ImmersiveMediaSlot key={asset.id} asset={asset} />
            ))}
          </div>
        </section>

        <div>
          <Link href="/" className="text-sm font-semibold text-zinc-300 underline underline-offset-4">
            Voltar para página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
