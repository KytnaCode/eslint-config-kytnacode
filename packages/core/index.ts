import typescriptEslintParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import type { ESLint } from "eslint";

const rules: ESLint.ConfigData["rules"] = {
  "array-callback-return": "warn",
  "no-await-in-loop": "warn",
  "no-constructor-return": "warn",
  "no-self-compare": "error",
  "no-template-curly-in-string": "warn",
  "no-unreachable-loop": "error",
  "arrow-body-style": "error",
  camelcase: "error",
  "capitalized-comments": "warn",
  "default-param-last": "error",
  eqeqeq: "error",
  "func-name-matching": "error",
  "func-names": "error",
  "func-style": "error",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-implicit-coercion": "error",
  "no-implicit-globals": "error",
  "no-implied-eval": "error",
  "no-invalid-this": "error",
  "no-labels": "error",
  "no-magic-numbers": "warn",
  "no-nested-ternary": "warn",
  "no-throw-literal": "error",
  "no-undefined": "error",
  "no-useless-call": "error",
  "no-useless-computed-key": "error",
  "no-useless-concat": "error",
  "no-useless-constructor": "error",
  "no-useless-rename": "error",
  "no-var": "error",
  "prefer-arrow-callback": "error",
  "prefer-const": "error",
  "prefer-regex-literals": "error",
  yoda: "error",

  "unicorn/custom-error-definition": "error",
  "unicorn/error-message": "error",
  "unicorn/no-unsafe-dom-html": "error",
};

export default defineConfig([
  {
    files: ["**/*.{ts,tsx,mtsx}"],
    extends: [unicorn.configs.recommended],
    plugins: {
      unicorn,
    },
    languageOptions: {
      globals: globals.builtin,
      parser: typescriptEslintParser,
    },
    rules,
  },
  {
    extends: [js.configs.recommended, unicorn.configs.recommended],
    files: ["**/*.{js,mjs,cjs,jsx,mjsx}"],
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn,
    },
    rules,
  },
]);
