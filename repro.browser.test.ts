import { expect, test } from "vite-plus/test";

test("loads browser context", async () => {
  const { page } = await import("@vitest/browser/context");
  expect(page).toBeDefined();
});
