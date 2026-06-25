import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import globals from "globals";

export default defineConfig([
  react.configs.flat["jsx-runtime"]!,
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/bolean-prop-naming": "error",
      "react/iframe-missing-sandbox": "error",
    },
  },
]);
