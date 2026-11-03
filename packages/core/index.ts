import js from "@eslint/js";
import typescriptEslintParser from "@typescript-eslint/parser";
import type { ESLint } from "eslint";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

const unicornRules: ESLint.ConfigData["rules"] = {
  "unicorn/custom-error-definition": "error",
  "unicorn/error-message": "error",
  "unicorn/no-unsafe-dom-html": "error",
  "unicorn/logical-assignment-operators": "off",
  "unicorn/name-replacements": "off",
  "unicorn/filename-case": [
    "warn",
    {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
    },
  ],
};

export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommended],
    languageOptions: {
      globals: globals.builtin,
      parser: typescriptEslintParser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    extends: [js.configs.recommended, unicorn.configs.recommended],
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      unicorn,
      "unused-imports": unusedImports,
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
      "no-eval": "error",
      "no-extend-native": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-invalid-this": "error",
      "no-labels": "error",
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

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      ...unicornRules,
    },
  },
]);
