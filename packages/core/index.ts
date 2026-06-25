import js from "@eslint/js";
import typescriptEslintParser from "@typescript-eslint/parser";
import type { ESLint } from "eslint";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

const unicornRules: ESLint.ConfigData["rules"] = {
  "unicorn/custom-error-definition": "error",
  "unicorn/error-message": "error",
  "unicorn/no-unsafe-dom-html": "error",
};

export default defineConfig([
  {
    files: ["**/*.{ts,tsx,mtsx}"],
    extends: [unicorn.configs.recommended, tseslint.configs.recommended],
    plugins: {
      unicorn,
    },
    languageOptions: {
      globals: globals.builtin,
      parser: typescriptEslintParser,
    },
    rules: unicornRules,
  },
  {
    files: ["**/*.{js,jsx,cjs,mjs,mjsx}"],
    extends: [unicorn.configs.recommended],
    plugins: {
      unicorn,
    },
    languageOptions: {
      globals: globals.builtin,
    },
    rules: unicornRules,
  },
  {
    extends: [js.configs.recommended],
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      globals: globals.builtin,
    },
    rules: {
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

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
]);
