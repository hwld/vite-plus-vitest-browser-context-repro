import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|js)"],
  addons: ["@storybook/addon-vitest"],
  framework: "@storybook/html-vite",
};

export default config;
