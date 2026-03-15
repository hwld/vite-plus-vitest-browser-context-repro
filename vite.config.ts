import { defineConfig } from "vite-plus";
import { playwright } from "vite-plus/test/browser-playwright";

export default defineConfig({
  lint: { options: { typeAware: true, typeCheck: true } },
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright({}),
      instances: [{ browser: "chromium" }],
      screenshotFailures: false,
    },
    include: ["repro.browser.test.ts"],
  },
});
