import Link from "next/link";

import { ImmersiveMediaSlot } from "@/components/immersive-media-slot";
import { athleteProfile } from "@/lib/athlete-profile";
import { mediaStorySections } from "@/lib/media-showcase";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:px-10">
        <header className="grid gap-8 border border-zinc-800 bg-[linear-gradient(110deg,_#07090f_15%,_#111827_55%,_#07090f_95%)] p-7 md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              Projeto oficial de captação para o mundial
            </p>
            <h1 className="text-4xl font-black uppercase leading-[0.95] md:text-7xl">
              Lucas Shinhe Lourenço
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200">
              Atleta brasileiro de sumô, {athleteProfile.age} anos, da academia{" "}
              {athleteProfile.academy} em {athleteProfile.city}.
            </p>
            <p className="max-w-2xl text-zinc-300">{athleteProfile.mission}</p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-none border border-amber-300 bg-amber-300 px-6 font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-200"
                href="/apoiar"
              >
                Apoiar com doação
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-none border border-zinc-500 px-6 font-bold uppercase tracking-wide transition hover:border-zinc-300"
                href="/patrocinar"
              >
                Quero patrocinar
              </Link>
            </div>
          </div>

          <div className="relative border border-zinc-800 bg-zinc-950 p-6">
            <p className="absolute right-6 top-4 text-[8rem] font-black leading-none text-zinc-900/80">
              01
            </p>
            <div className="relative z-10 space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Estrela em ascensão</p>
              <h2 className="text-3xl font-black uppercase md:text-4xl">Nova força do sumô brasileiro</h2>
              <p className="text-zinc-300">
                Classificado para competir no cenário internacional, Lucas combina potência,
                técnica e disciplina para representar o Brasil em alto nível.
              </p>
              <div className="grid grid-cols-2 gap-3 border-t border-zinc-800 pt-4 text-sm">
                <div>
                  <p className="text-zinc-400">Cidade</p>
                  <p className="font-semibold uppercase">{athleteProfile.city}</p>
                </div>
                <div>
                  <p className="text-zinc-400">Academia</p>
                  <p className="font-semibold uppercase">{athleteProfile.academy}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Potencial</p>
            <h2 className="mt-3 text-xl font-black uppercase">16 anos, alto rendimento</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Talento jovem com rotina de treino intensa e foco em performance internacional.
            </p>
          </article>
          <article className="border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Projeção</p>
            <h2 className="mt-3 text-xl font-black uppercase">Representação global</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Presença em campeonato mundial e trajetória consistente em seletivas nacionais.
            </p>
          </article>
          <article className="border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Impacto</p>
            <h2 className="mt-3 text-xl font-black uppercase">Marca com propósito</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Apoiar Lucas conecta sua empresa a mérito esportivo, juventude e disciplina.
            </p>
          </article>
        </section>

        <section className="grid gap-6 border border-zinc-800 bg-[#070b12] p-7 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Conquistas</p>
            <h2 className="text-3xl font-black uppercase">Títulos que constroem a lenda</h2>
            <p className="text-zinc-300">
              Resultados reais, recorrentes e recentes. O projeto não vende promessa vazia:
              apresenta performance comprovada.
            </p>
          </div>
          <ul className="grid gap-3 text-zinc-200 md:grid-cols-2">
            {athleteProfile.achievements.map((achievement) => (
              <li
                key={`${achievement.title}-${achievement.year}`}
                className="border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm"
              >
                <span className="block font-semibold uppercase text-amber-200">{achievement.year}</span>
                <span>{achievement.title}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-8 border border-zinc-800 bg-[#060a10] p-7 md:p-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Experiência imersiva</p>
            <h2 className="text-3xl font-black uppercase md:text-4xl">
              Conheça o atleta em cada etapa da jornada
            </h2>
            <p className="max-w-3xl text-zinc-300">
              Esta seção foi preparada para você inserir fotos e vídeos em diferentes formatos
              (horizontal, vertical e quadrado), conduzindo o visitante por uma narrativa visual
              que aumenta conexão e confiança.
            </p>
          </div>

          <div className="space-y-8">
            {mediaStorySections.map((section) => (
              <article key={section.id} className="space-y-4 border border-zinc-800 bg-zinc-950/50 p-5">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{section.eyebrow}</p>
                  <h3 className="text-2xl font-black uppercase">{section.title}</h3>
                  <p className="text-zinc-300">{section.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {section.assets.map((asset) => (
                    <ImmersiveMediaSlot key={asset.id} asset={asset} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
