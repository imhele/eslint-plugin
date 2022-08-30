import type { Linter } from 'eslint';
import { FileExtensions, mapElementWithPrefix, TSFileExtensions } from './core.cjs';

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
    // https://eslint.org/docs/latest/rules/no-console
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
    'import/default': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unused-modules.md
    'import/no-unused-modules': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/callback-return.md
    'node/callback-return': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/exports-style.md
    'node/exports-style': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/file-extension-in-import.md
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
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/global-require.md
    'node/global-require': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/handle-callback-err.md
    'node/handle-callback-err': ['error', '^(err|error)$'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-callback-literal.md
    'node/no-callback-literal': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-exports-assign.md
    'node/no-exports-assign': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-extraneous-import.md
    'node/no-extraneous-import': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-extraneous-require.md
    'node/no-extraneous-require': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-import.md
    'node/no-missing-import': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-require.md
    'node/no-missing-require': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-mixed-requires.md
    'node/no-mixed-requires': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-new-require.md
    'node/no-new-require': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-path-concat.md
    'node/no-path-concat': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-process-env.md
    'node/no-process-env': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-process-exit.md
    'node/no-process-exit': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-restricted-import.md
    'node/no-restricted-import': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-restricted-require.md
    'node/no-restricted-require': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-sync.md
    'node/no-sync': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-require.md
    'node/no-unpublished-require': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-bin.md
    'node/no-unpublished-bin': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md
    'node/no-unsupported-features/es-builtins': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
    'node/no-unsupported-features/es-syntax': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md
    'node/no-unsupported-features/node-builtins': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/buffer.md
    'node/prefer-global/buffer': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/console.md
    'node/prefer-global/console': ['error', 'always'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/process.md
    'node/prefer-global/process': ['error', 'always'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-decoder.md
    'node/prefer-global/text-decoder': ['error', 'always'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-encoder.md
    'node/prefer-global/text-encoder': ['error', 'always'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/url.md
    'node/prefer-global/url': ['error', 'always'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/url-search-params.md
    'node/prefer-global/url-search-params': ['error', 'always'],
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/dns.md
    'node/prefer-promises/dns': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/fs.md
    'node/prefer-promises/fs': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/process-exit-as-throw.md
    'node/process-exit-as-throw': 'off',
    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/shebang.md
    'node/shebang': 'error',
  },
  overrides: [
    {
      files: mapElementWithPrefix(TSFileExtensions, '*'),
      rules: {
        // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/handle-callback-err.md
        'node/handle-callback-err': 'off',
        // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-new-require.md
        'node/no-new-require': 'off',
        // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
        'node/no-unsupported-features/es-syntax': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
