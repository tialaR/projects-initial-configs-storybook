// .storybook/main.ts
export default {
  stories: ["../src/components/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite", // ou react-webpack, depende do que você escolheu
    options: {},
  },
};
