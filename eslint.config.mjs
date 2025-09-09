import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig(
  {
    ignores: ['dist', '.astro'],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        // TODO: There is a bug with the parser: https://github.com/ota-meshi/eslint-plugin-astro/issues/447
        // projectService: {
        //   allowDefaultProject: ['**/*.astro'],
        // },
        // projectService: false,
        project: './tsconfig.json',
      },
    },
  },
  {
    files: ['*.astro'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  }
);
