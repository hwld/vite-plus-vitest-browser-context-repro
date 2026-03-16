import { defineConfig } from "vite-plus";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "vite-plus/test/browser-playwright";

export default defineConfig({
  lint: { options: { typeAware: true, typeCheck: true } },
  test: {
    projects: [
      {
        extends: true,
        plugins: [storybookTest()],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
            screenshotFailures: false,
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
