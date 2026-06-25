import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default defineConfig([
  react.configs.flat["jsx-runtime"]!,
  reactHooks.configs.flat.recommended,
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
