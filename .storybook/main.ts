import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // outros addons
  ],
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      plugins: [
        svgr(),
      ],
    });
  },
};

export default config;
