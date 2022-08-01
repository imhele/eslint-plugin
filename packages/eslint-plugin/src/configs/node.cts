import type { Linter } from 'eslint';
import { FileExtensions, TSFilePatterns } from './core.cjs';

export const node: Linter.Config = {
  // https://www.npmjs.com/package/eslint-plugin-node
  plugins: ['node'],
  extends: ['plugin:@imhele/core', 'plugin:node/recommended'],
  env: {
    browser: false,
    commonjs: false,
    node: true,
  },
  rules: {
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',
    // https://eslint.org/docs/rules/no-console
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': ['error', { paths: [], patterns: [] }],
    'import/default': 'off',
    'import/no-commonjs': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unused-modules': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-extraneous-import.md
    'node/no-extraneous-import': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-extraneous-require.md
    'node/no-extraneous-require': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-import.md
    'node/no-missing-import': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-require.md
    'node/no-missing-require': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-require.md
    'node/no-unpublished-require': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-bin.md
    'node/no-unpublished-bin': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.0/docs/rules/no-unsupported-features/es-builtins.md
    'node/no-unsupported-features/es-builtins': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.0/docs/rules/no-unsupported-features/es-syntax.md
    'node/no-unsupported-features/es-syntax': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.0/docs/rules/no-unsupported-features/node-builtins.md
    'node/no-unsupported-features/node-builtins': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.0/docs/rules/prefer-global/process.md
    'node/prefer-global/process': ['error', 'always'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.0/docs/rules/prefer-global/console.md
    'node/prefer-global/console': ['error', 'always'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.0/docs/rules/prefer-global/url.md
    'node/prefer-global/url': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.0/docs/rules/prefer-global/url-search-params.md
    'node/prefer-global/url-search-params': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.0/docs/rules/prefer-global/buffer.md
    'node/prefer-global/buffer': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
    'node/prefer-global/text-decoder': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
    'node/prefer-global/text-encoder': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/process-exit-as-throw.md
    'node/process-exit-as-throw': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/shebang.md
    'node/shebang': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/exports-style.md
    'node/exports-style': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
    'node/file-extension-in-import': [
      'error',
      'always',
      {
        '.js': 'never',
        '.jsx': 'never',
        '.ts': 'never',
        '.d.ts': 'never',
        '.tsx': 'never',
        tryExtensions: [...FileExtensions, '.json', '.node'],
      },
    ],
    // https://github.com/mysticatea/eslint-plugin-node/blob/v9.0.0/docs/rules/prefer-promises/dns.md
    'node/prefer-promises/dns': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/v9.0.0/docs/rules/prefer-promises/fs.md
    'node/prefer-promises/fs': 'off',
    // https://eslint.org/docs/rules/callback-return
    'node/callback-return': 'off',
    // https://eslint.org/docs/rules/global-require
    'node/global-require': 'off',
    // https://eslint.org/docs/rules/handle-callback-err
    'node/handle-callback-err': ['error', '^(err|error)$'],
    // https://eslint.org/docs/rules/no-mixed-requires
    'node/no-mixed-requires': 'error',
    // https://eslint.org/docs/rules/no-new-require
    'node/no-new-require': 'error',
    // https://eslint.org/docs/rules/no-path-concat
    'node/no-path-concat': 'error',
    // https://eslint.org/docs/rules/no-process-env
    'node/no-process-env': 'off',
    // https://eslint.org/docs/rules/no-process-exit
    'node/no-process-exit': 'off',
    // https://eslint.org/docs/rules/no-sync
    'node/no-sync': 'off',
  },
  overrides: [
    {
      files: [...TSFilePatterns],
      rules: {
        // https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
        'import/named': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
      // https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
      settings: {
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': { '@typescript-eslint/parser': [...TSFilePatterns] },
      },
    },
  ],
};
