import Image from "next/image";

import type { MediaAssetSlot } from "@/lib/media-showcase";

const orientationClasses: Record<MediaAssetSlot["orientation"], string> = {
  landscape: "aspect-[16/9]",
  portrait: "aspect-[9/16]",
  square: "aspect-square",
};

const orientationLabel: Record<MediaAssetSlot["orientation"], string> = {
  landscape: "Horizontal 16:9",
  portrait: "Vertical 9:16",
  square: "Quadrado 1:1",
};

export function ImmersiveMediaSlot({ asset }: { asset: MediaAssetSlot }) {
  const hasSource = Boolean(asset.src);

  return (
    <article className="border border-zinc-800 bg-zinc-950/70 p-3">
      <div className={`relative overflow-hidden border border-zinc-800 bg-zinc-900 ${orientationClasses[asset.orientation]}`}>
        {hasSource && asset.type === "image" && asset.src ? (
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : null}

        {hasSource && asset.type === "video" && asset.src ? (
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            poster={asset.poster}
          >
            <source src={asset.src} />
            Seu navegador não suporta reprodução de vídeo.
          </video>
        ) : null}

        {!hasSource ? (
          <div className="flex h-full w-full flex-col justify-between bg-[linear-gradient(130deg,_#0b1220,_#09090b)] p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Placeholder {asset.type === "video" ? "vídeo" : "imagem"}
              </p>
              <p className="mt-2 text-lg font-black uppercase text-zinc-200">{asset.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{orientationLabel[asset.orientation]}</p>
            </div>
            <p className="text-xs text-zinc-500">{asset.targetPath}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-xs uppercase tracking-[0.16em] text-amber-300">{asset.type}</p>
        <h3 className="text-lg font-black uppercase">{asset.title}</h3>
        <p className="text-sm text-zinc-300">{asset.caption}</p>
      </div>
    </article>
  );
}
