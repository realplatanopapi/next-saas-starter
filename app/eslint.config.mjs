// @ts-check

import eslint from '@eslint/js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', '.next'],
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      unicorn,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'no-restricted-imports': ['error', '@chakra-ui/react'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },
  {
    files: ['src/ui/**/*'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
)
