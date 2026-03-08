export type MediaType = "image" | "video";
export type MediaOrientation = "landscape" | "portrait" | "square";

export type MediaAssetSlot = {
  id: string;
  title: string;
  caption: string;
  type: MediaType;
  orientation: MediaOrientation;
  src?: string;
  poster?: string;
  alt: string;
  targetPath: string;
};

export type MediaStorySection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  assets: MediaAssetSlot[];
};

// Estrutura sugerida para inserir seus arquivos em public/assets.
// Basta criar os arquivos nos caminhos indicados em targetPath.
export const mediaStorySections: MediaStorySection[] = [
  {
    id: "origem",
    eyebrow: "Capítulo 01",
    title: "Origem e rotina",
    description:
      "Apresente o início da jornada do Lucas, rotina de treinos e bastidores que mostram disciplina e foco.",
    assets: [
      {
        id: "treino-diario",
        title: "Treino diário",
        caption: "Foto horizontal de treino técnico.",
        type: "image",
        orientation: "landscape",
        alt: "Lucas em treino técnico de sumô",
        targetPath: "public/assets/origem/treino-diario-16x9.jpg",
      },
      {
        id: "bastidor-vertical",
        title: "Bastidor do dia",
        caption: "Vídeo vertical curto de preparação.",
        type: "video",
        orientation: "portrait",
        alt: "Bastidor em vídeo da preparação do atleta",
        targetPath: "public/assets/origem/bastidor-9x16.mp4",
      },
      {
        id: "academia",
        title: "Academia Kodokan",
        caption: "Imagem do ambiente de treino e equipe.",
        type: "image",
        orientation: "square",
        alt: "Ambiente da academia Kodokan",
        targetPath: "public/assets/origem/academia-1x1.jpg",
      },
    ],
  },
  {
    id: "competicao",
    eyebrow: "Capítulo 02",
    title: "Competição e conquistas",
    description:
      "Mostre momentos de luta, premiações e registros que comprovam a consistência dos resultados.",
    assets: [
      {
        id: "luta-principal",
        title: "Luta decisiva",
        caption: "Vídeo horizontal de combate oficial.",
        type: "video",
        orientation: "landscape",
        alt: "Luta oficial em campeonato de sumô",
        targetPath: "public/assets/competicao/luta-principal-16x9.mp4",
      },
      {
        id: "podio",
        title: "Pódio",
        caption: "Imagem vertical com medalha/troféu.",
        type: "image",
        orientation: "portrait",
        alt: "Lucas no pódio após conquista",
        targetPath: "public/assets/competicao/podio-9x16.jpg",
      },
      {
        id: "delegacao",
        title: "Delegação",
        caption: "Registro da equipe em campeonato.",
        type: "image",
        orientation: "landscape",
        alt: "Delegação brasileira em campeonato",
        targetPath: "public/assets/competicao/delegacao-16x9.jpg",
      },
    ],
  },
  {
    id: "futuro",
    eyebrow: "Capítulo 03",
    title: "Próximo passo: mundial",
    description:
      "Conecte o visitante ao próximo objetivo com materiais emocionais e visão de impacto do apoio.",
    assets: [
      {
        id: "mensagem-atleta",
        title: "Mensagem do atleta",
        caption: "Vídeo vertical de convite ao apoio.",
        type: "video",
        orientation: "portrait",
        alt: "Mensagem em vídeo do atleta convidando apoiadores",
        targetPath: "public/assets/futuro/mensagem-9x16.mp4",
      },
      {
        id: "foco-competicao",
        title: "Foco total",
        caption: "Imagem horizontal em clima de campanha.",
        type: "image",
        orientation: "landscape",
        alt: "Lucas concentrado antes de competir",
        targetPath: "public/assets/futuro/foco-16x9.jpg",
      },
      {
        id: "chamada-final",
        title: "Chamada final",
        caption: "Arte quadrada para reforço do CTA.",
        type: "image",
        orientation: "square",
        alt: "Arte de chamada para apoio ao projeto",
        targetPath: "public/assets/futuro/chamada-1x1.jpg",
      },
    ],
  },
];
