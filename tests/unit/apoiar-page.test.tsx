import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ApoiarPage from "@/app/apoiar/page";

describe("Apoiar page", () => {
  it("renderiza simulação de doação com pagamento mockado", () => {
    render(<ApoiarPage />);

    expect(screen.getByRole("heading", { name: /Apoiar com doação/i })).toBeInTheDocument();
    expect(screen.getByText(/Fluxo de Pagamento Mockado/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Doar R\$/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Ver proposta para patrocinadores/i }),
    ).toHaveAttribute("href", "/patrocinar");
  });
});
