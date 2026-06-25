import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    extends: [
      react.configs.flat["jsx-runtime"]!,
      reactHooks.configs.flat.recommended,
    ],
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
