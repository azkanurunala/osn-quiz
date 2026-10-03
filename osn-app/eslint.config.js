import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    // The interactive layer is loaded with plain <script> tags: lib.js creates the
    // global `IX` at runtime and every later file reads it. That global can't be
    // seen by the linter, so declare it here instead of littering the files.
    files: ['public/interaktif/**/*.js'],
    languageOptions: {
      globals: { ...globals.browser, IX: 'readonly' },
    },
  },
])
