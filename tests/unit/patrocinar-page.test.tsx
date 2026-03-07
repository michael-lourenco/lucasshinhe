import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import PatrocinarPage from "@/app/patrocinar/page";

describe("Patrocinar page", () => {
  it("renderiza cotas e formulário de interesse", () => {
    render(<PatrocinarPage />);

    expect(screen.getByRole("heading", { name: /Quero patrocinar/i })).toBeInTheDocument();
    expect(screen.getByText(/Cota Bronze/i)).toBeInTheDocument();
    expect(screen.getByText(/Cota Prata/i)).toBeInTheDocument();
    expect(screen.getByText(/Cota Ouro/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Enviar interesse \(UI mockada\)/i }),
    ).toBeInTheDocument();
  });
});
