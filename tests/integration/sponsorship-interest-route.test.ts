// @vitest-environment node
import { describe, expect, it } from "vitest";

import { POST } from "@/app/api/sponsorship-interest/route";

describe("POST /api/sponsorship-interest", () => {
  it("retorna 400 para payload inválido", async () => {
    const request = new Request("http://localhost/api/sponsorship-interest", {
      method: "POST",
      body: JSON.stringify({ companyName: "", email: "email-invalido" }),
      headers: { "Content-Type": "application/json" },
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.ok).toBe(false);
    expect(json.errors).toBeDefined();
  });

  it("retorna 201 para payload válido", async () => {
    const request = new Request("http://localhost/api/sponsorship-interest", {
      method: "POST",
      body: JSON.stringify({
        companyName: "Empresa Exemplo",
        contactName: "Ana Silva",
        email: "ana@empresa.com.br",
        message: "Temos interesse em cotas de patrocínio ouro.",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(201);
    expect(json.ok).toBe(true);
    expect(json.lead).toMatchObject({
      companyName: "Empresa Exemplo",
      contactName: "Ana Silva",
      email: "ana@empresa.com.br",
    });
  });
});
