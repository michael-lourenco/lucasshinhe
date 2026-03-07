import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Home page", () => {
  it("mostra a proposta do projeto e CTAs principais", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /Lucas Shinhe Lourenço/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Atleta brasileiro de sumô/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Apoiar com doação/i }),
    ).toHaveAttribute("href", "/apoiar");
    expect(
      screen.getByRole("link", { name: /Quero patrocinar/i }),
    ).toHaveAttribute("href", "/patrocinar");
  });
});
