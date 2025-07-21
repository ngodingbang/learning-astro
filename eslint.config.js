import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import * as importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import sortExportsPlugin from 'eslint-plugin-sort-exports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettierRecommended,
  globalIgnores(['.astro/']),
  {
    files: ['**/*.{astro,js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
      'sort-exports': sortExportsPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'unknown',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],

          'newlines-between': 'always',

          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
        },
      ],

      'sort-exports/sort-exports': [
        'error',
        {
          sortDir: 'asc',
        },
      ],

      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
    },
  },
);
