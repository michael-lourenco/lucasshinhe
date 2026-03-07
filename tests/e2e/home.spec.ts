import { expect, test } from "@playwright/test";

test("renderiza narrativa e CTAs de conversão", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Lucas Shinhe Lourenço" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Apoiar com doação" })).toHaveAttribute(
    "href",
    "/apoiar",
  );
  await expect(page.getByRole("link", { name: "Quero patrocinar" })).toHaveAttribute(
    "href",
    "/patrocinar",
  );
});
