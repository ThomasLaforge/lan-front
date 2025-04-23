import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.describe("homepage", () => {
  test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page
      .getByRole("link", { name: "Get started" })
      .click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });

  test("test", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.locator("#toto").click();
    await page.locator("#tata").click();
    await expect(
      page.getByText("init playwright@latest")
    ).toContainText("init");
  });
});
