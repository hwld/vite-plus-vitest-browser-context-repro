import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
  title: "Button",
  render: () => {
    const button = document.createElement("button");
    button.textContent = "Click me";
    return button;
  },
};

export default meta;

export const Default: StoryObj = {};
