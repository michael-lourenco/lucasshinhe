import { describe, expect, it } from "vitest";

import { athleteProfile } from "@/lib/athlete-profile";

describe("athleteProfile", () => {
  it("expõe dados essenciais do atleta", () => {
    expect(athleteProfile.name).toBe("Lucas Shinhe Lourenço");
    expect(athleteProfile.city).toContain("Itapetininga");
    expect(athleteProfile.academy).toBe("Kodokan");
    expect(athleteProfile.sport).toBe("Sumô");
  });

  it("contém conquistas relevantes para provas sociais", () => {
    const titles = athleteProfile.achievements.map((achievement) => achievement.title);

    expect(titles).toContain("Participação no Mundial de Sumô (Tailândia)");
    expect(titles).toContain("1º lugar - Troféu Brasil");
    expect(titles).toContain("1º lugar - Campeonato Brasileiro de Sumô");
  });
});
