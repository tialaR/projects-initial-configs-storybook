import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/themes/default"; // Ajuste conforme seu tema

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];
