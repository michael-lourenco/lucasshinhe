export type Achievement = {
  title: string;
  year: number;
};

export const athleteProfile = {
  name: "Lucas Shinhe Lourenço",
  age: 16,
  city: "Itapetininga, São Paulo, Brasil",
  academy: "Kodokan",
  sport: "Sumô",
  mission:
    "Captação de doações e patrocínios para viabilizar a participação no Campeonato Mundial de Sumô.",
  achievements: [
    { title: "Participação no Mundial de Sumô (Tailândia)", year: 2025 },
    { title: "1º lugar - Troféu Brasil", year: 2026 },
    { title: "1º lugar - Campeonato Brasileiro de Sumô", year: 2024 },
    { title: "1º lugar - Troféu Brasil Individual / Seletiva Sul-Americana", year: 2025 },
    { title: "1º lugar - Troféu Brasil por Equipes", year: 2025 },
    { title: "2º lugar - Campeonato Capão Bonito", year: 2024 },
  ] as Achievement[],
};
