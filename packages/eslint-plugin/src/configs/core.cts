import BabelPresetEnv from '@babel/preset-env';
import BabelPresetReact from '@babel/preset-react';
import PrettierConfig from '@imhele/prettier-config';
import type { Linter } from 'eslint';

export const CJSFileExtensions: readonly string[] = ['.cjs', '.cjsx'];
export const MJSFileExtensions: readonly string[] = ['.mjs', '.mjsx'];

export const JSFileExtensions: readonly string[] = [
  '.js',
  '.jsx',
  ...MJSFileExtensions,
  ...CJSFileExtensions,
];

export const CTSFileExtensions: readonly string[] = ['.cts', '.ctsx'];
export const MTSFileExtensions: readonly string[] = ['.mts', '.mtsx'];

export const TSFileExtensions: readonly string[] = [
  '.ts',
  '.tsx',
  ...MTSFileExtensions,
  ...CTSFileExtensions,
];

export const FileExtensions: readonly string[] = [
  ...JSFileExtensions,
  ...TSFileExtensions,
  ...mapElementWithPrefix(TSFileExtensions, '.d'),
];

export function mapElementWithPrefix<T extends readonly string[], U extends string>(
  input: T,
  prefix: U,
): { -readonly [Key in keyof T]: `${U}${T[Key]}` };
export function mapElementWithPrefix(input: readonly string[], prefix: string): string[] {
  return input.map(element => `${prefix}${element}`);
}

export const core: Linter.Config = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: { presets: [BabelPresetEnv, BabelPresetReact] },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  env: {
    browser: false,
    es2022: true,
    jest: false,
    mocha: false,
    node: false,
    serviceworker: false,
    'shared-node-browser': true,
    worker: false,
  },
  ignorePatterns: [
    '!.*rc.*',
    '*.local.*',
    'build/',
    'coverage/',
    'dist/',
    'node_modules/',
    'release/',
  ],
  plugins: [
    // https://www.npmjs.com/package/@babel/eslint-plugin
    '@babel',
    // https://www.npmjs.com/package/eslint-plugin-import
    'import',
    // https://www.npmjs.com/package/eslint-plugin-eslint-comments
    'eslint-comments',
    // https://www.npmjs.com/package/eslint-plugin-filenames
    'promise',
    // https://www.npmjs.com/package/eslint-plugin-prettier
    'prettier',
    // https://www.npmjs.com/package/eslint-plugin-file-progress
    'file-progress',
    // current pkg
    '@imhele',
  ],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    // https://eslint.org/docs/latest/rules/default-case-last
    'default-case-last': 'off',
    // https://eslint.org/docs/latest/rules/default-param-last
    'default-param-last': 'off',
    // https://eslint.org/docs/latest/rules/for-direction
    'for-direction': 'off',
    // https://eslint.org/docs/latest/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],
    // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'off',
    // https://eslint.org/docs/latest/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',
    // https://eslint.org/docs/latest/rules/no-await-in-loop
    'no-await-in-loop': 'off',
    // https://eslint.org/docs/latest/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',
    // https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/no-console
    'no-console': 'error',
    // https://eslint.org/docs/latest/rules/no-constant-binary-expression
    'no-constant-binary-expression': 'off',
    // https://eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': 'error',
    // https://eslint.org/docs/latest/rules/no-constructor-return
    'no-constructor-return': 'off',
    // https://eslint.org/docs/latest/rules/no-control-regex
    'no-control-regex': 'error',
    // https://eslint.org/docs/latest/rules/no-debugger
    'no-debugger': 'error',
    // https://eslint.org/docs/latest/rules/no-dupe-args
    'no-dupe-args': 'error',
    // https://eslint.org/docs/latest/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'error',
    // https://eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': 'error',
    // https://eslint.org/docs/latest/rules/no-empty
    'no-empty': ['error', { allowEmptyCatch: true }],
    // https://eslint.org/docs/latest/rules/no-empty-character-class
    'no-empty-character-class': 'error',
    // https://eslint.org/docs/latest/rules/no-ex-assign
    'no-ex-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',
    // https://eslint.org/docs/latest/rules/no-extra-parens
    'no-extra-parens': ['error', 'all'],
    // https://eslint.org/docs/latest/rules/no-extra-semi
    'no-extra-semi': 'error',
    // https://eslint.org/docs/latest/rules/no-func-assign
    'no-func-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-import-assign
    'no-import-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-inner-declarations
    'no-inner-declarations': ['error', 'both'],
    // https://eslint.org/docs/latest/rules/no-invalid-regexp
    'no-invalid-regexp': ['error', { allowConstructorFlags: [] }],
    // https://eslint.org/docs/latest/rules/no-irregular-whitespace
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: false,
        skipTemplates: false,
        skipComments: false,
        skipRegExps: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',
    // https://eslint.org/docs/latest/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',
    // https://eslint.org/docs/latest/rules/no-obj-calls
    'no-obj-calls': 'error',
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',
    // https://eslint.org/docs/latest/rules/no-regex-spaces
    'no-regex-spaces': 'error',
    // https://eslint.org/docs/latest/rules/no-restricted-exports
    'no-restricted-exports': 'off',
    // https://eslint.org/docs/latest/rules/no-setter-return
    'no-setter-return': 'error',
    // https://eslint.org/docs/latest/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',
    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',
    // https://eslint.org/docs/latest/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',
    // https://eslint.org/docs/latest/rules/no-unreachable
    'no-unreachable': 'error',
    // https://eslint.org/docs/latest/rules/no-unreachable-loop
    'no-unreachable-loop': 'off',
    // https://eslint.org/docs/latest/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',
    // https://eslint.org/docs/latest/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',
    // https://eslint.org/docs/latest/rules/require-atomic-updates
    'require-atomic-updates': ['error', { allowProperties: true }],
    // https://eslint.org/docs/latest/rules/use-isnan
    'use-isnan': 'error',
    // https://eslint.org/docs/latest/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],

    /*
     * Best Practices
     * https://eslint.org/docs/latest/rules/accessor-pairs
     */
    'accessor-pairs': 'error',
    // https://eslint.org/docs/latest/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],
    // https://eslint.org/docs/latest/rules/block-scoped-var
    'block-scoped-var': 'error',
    // https://eslint.org/docs/latest/rules/class-methods-use-this
    'class-methods-use-this': 'off',
    // https://eslint.org/docs/latest/rules/complexity
    complexity: ['error', { max: 30 }],
    // https://eslint.org/docs/latest/rules/consistent-return
    'consistent-return': 'off',
    // https://eslint.org/docs/latest/rules/curly
    curly: ['error', 'multi-or-nest', 'consistent'],
    // https://eslint.org/docs/latest/rules/default-case
    'default-case': 'error',
    // https://eslint.org/docs/latest/rules/dot-location
    'dot-location': ['error', 'property'],
    // https://eslint.org/docs/latest/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true }],
    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: ['error', 'always'],
    // https://eslint.org/docs/latest/rules/guard-for-in
    'guard-for-in': 'off',
    // https://eslint.org/docs/latest/rules/max-classes-per-file
    'max-classes-per-file': 'off',
    // https://eslint.org/docs/latest/rules/no-alert
    'no-alert': 'error',
    // https://eslint.org/docs/latest/rules/no-caller
    'no-caller': 'error',
    // https://eslint.org/docs/latest/rules/no-case-declarations
    'no-case-declarations': 'error',
    // https://eslint.org/docs/latest/rules/no-div-regex
    'no-div-regex': 'error',
    // https://eslint.org/docs/latest/rules/no-else-return
    'no-else-return': 'off',
    // https://eslint.org/docs/latest/rules/no-empty-function
    'no-empty-function': 'off',
    // https://eslint.org/docs/latest/rules/no-empty-pattern
    'no-empty-pattern': 'error',
    // https://eslint.org/docs/latest/rules/no-eq-null
    'no-eq-null': 'off',
    // https://eslint.org/docs/latest/rules/no-eval
    'no-eval': 'error',
    // https://eslint.org/docs/latest/rules/no-extend-native
    'no-extend-native': 'error',
    // https://eslint.org/docs/latest/rules/no-extra-bind
    'no-extra-bind': 'error',
    // https://eslint.org/docs/latest/rules/no-extra-label
    'no-extra-label': 'error',
    // https://eslint.org/docs/latest/rules/no-fallthrough
    'no-fallthrough': 'error',
    // https://eslint.org/docs/latest/rules/no-floating-decimal
    'no-floating-decimal': 'error',
    // https://eslint.org/docs/latest/rules/no-global-assign
    'no-global-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-implicit-coercion
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    // https://eslint.org/docs/latest/rules/no-implicit-globals
    'no-implicit-globals': 'error',
    // https://eslint.org/docs/latest/rules/no-implied-eval
    'no-implied-eval': 'error',
    // https://eslint.org/docs/latest/rules/no-invalid-this
    'no-invalid-this': 'off',
    '@babel/no-invalid-this': 'error',
    // https://eslint.org/docs/latest/rules/no-iterator
    'no-iterator': 'error',
    // https://eslint.org/docs/latest/rules/no-labels
    'no-labels': 'off',
    // https://eslint.org/docs/latest/rules/no-lone-blocks
    'no-lone-blocks': 'error',
    // https://eslint.org/docs/latest/rules/no-loop-func
    'no-loop-func': 'error',
    // https://eslint.org/docs/latest/rules/no-magic-numbers
    'no-magic-numbers': 'off',
    // https://eslint.org/docs/latest/rules/no-multi-spaces
    'no-multi-spaces': 'error',
    // https://eslint.org/docs/latest/rules/no-multi-str
    'no-multi-str': 'error',
    // https://eslint.org/docs/latest/rules/no-new
    'no-new': 'error',
    // https://eslint.org/docs/latest/rules/no-new-func
    'no-new-func': 'error',
    // https://eslint.org/docs/latest/rules/no-new-wrappers
    'no-new-wrappers': 'error',
    // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',
    // https://eslint.org/docs/latest/rules/no-octal
    'no-octal': 'error',
    // https://eslint.org/docs/latest/rules/no-octal-escape
    'no-octal-escape': 'error',
    // https://eslint.org/docs/latest/rules/no-param-reassign
    'no-param-reassign': 'off',
    // https://eslint.org/docs/latest/rules/no-promise-executor-return
    'no-promise-executor-return': 'error',
    // https://eslint.org/docs/latest/rules/no-proto
    'no-proto': 'error',
    // https://eslint.org/docs/latest/rules/no-redeclare
    'no-redeclare': ['error', { builtinGlobals: true }],
    // https://eslint.org/docs/latest/rules/no-restricted-properties
    'no-restricted-properties': 'off',
    // https://eslint.org/docs/latest/rules/no-return-assign
    'no-return-assign': ['error', 'except-parens'],
    // https://eslint.org/docs/latest/rules/no-return-await
    'no-return-await': 'off',
    // https://eslint.org/docs/latest/rules/no-script-url
    'no-script-url': 'error',
    // https://eslint.org/docs/latest/rules/no-self-assign
    'no-self-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-self-compare
    'no-self-compare': 'error',
    // https://eslint.org/docs/latest/rules/no-sequences
    // @bug conflict with prettier
    'no-sequences': 'off',
    // 'no-sequences': 'error',
    // https://eslint.org/docs/latest/rules/no-throw-literal
    'no-throw-literal': 'off',
    // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',
    // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': 'error',
    // https://eslint.org/docs/latest/rules/no-unused-expressions
    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/no-unused-labels
    'no-unused-labels': 'error',
    // https://eslint.org/docs/latest/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'off',
    // https://eslint.org/docs/latest/rules/no-useless-backreference
    'no-useless-backreference': 'error',
    // https://eslint.org/docs/latest/rules/no-useless-call
    'no-useless-call': 'error',
    // https://eslint.org/docs/latest/rules/no-useless-catch
    'no-useless-catch': 'error',
    // https://eslint.org/docs/latest/rules/no-useless-concat
    'no-useless-concat': 'error',
    // https://eslint.org/docs/latest/rules/no-useless-escape
    'no-useless-escape': 'error',
    // https://eslint.org/docs/latest/rules/no-useless-return
    'no-useless-return': 'error',
    // https://eslint.org/docs/latest/rules/no-void
    'no-void': 'error',
    // https://eslint.org/docs/latest/rules/no-warning-comments
    'no-warning-comments': ['error', { terms: ['@TEMP'] }],
    // https://eslint.org/docs/latest/rules/no-with
    'no-with': 'error',
    // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',
    // https://eslint.org/docs/latest/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',
    // https://eslint.org/docs/latest/rules/prefer-object-has-own
    'prefer-object-has-own': 'error',
    // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',
    // https://eslint.org/docs/latest/rules/prefer-regex-literals
    'prefer-regex-literals': 'error',
    // https://eslint.org/docs/latest/rules/radix
    radix: 'error',
    // https://eslint.org/docs/latest/rules/require-await
    'require-await': 'error',
    // https://eslint.org/docs/latest/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',
    // https://eslint.org/docs/latest/rules/vars-on-top
    'vars-on-top': 'off',
    // https://eslint.org/docs/latest/rules/wrap-iife
    'wrap-iife': ['error', 'inside'],
    // https://eslint.org/docs/latest/rules/yoda
    yoda: 'off',
    // https://eslint.org/docs/latest/rules/strict
    strict: ['error', 'never'],

    /*
     * Variables
     * https://eslint.org/docs/latest/rules/init-declarations
     */
    'init-declarations': 'off',
    // https://eslint.org/docs/latest/rules/no-delete-var
    'no-delete-var': 'off',
    // https://eslint.org/docs/latest/rules/no-label-var
    'no-label-var': 'error',
    // https://eslint.org/docs/latest/rules/no-restricted-globals
    'no-restricted-globals': 'error',
    // https://eslint.org/docs/latest/rules/no-shadow
    'no-shadow': [
      'error',
      {
        allow: [],
        builtinGlobals: false,
      },
    ],
    // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',
    // https://eslint.org/docs/latest/rules/no-undef
    'no-undef': 'error',
    // https://eslint.org/docs/latest/rules/no-undef-init
    'no-undef-init': 'error',
    // https://eslint.org/docs/latest/rules/no-undefined
    'no-undefined': 'off',
    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: false,
      },
    ],

    /*
     * Stylistic Issues
     * https://eslint.org/docs/latest/rules/array-bracket-newline
     */
    'array-bracket-newline': ['error', 'consistent'],
    // https://eslint.org/docs/latest/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/array-element-newline
    'array-element-newline': ['error', 'consistent'],
    // https://eslint.org/docs/latest/rules/block-spacing
    'block-spacing': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // https://eslint.org/docs/latest/rules/camelcase
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        properties: 'never',
      },
    ],
    // https://eslint.org/docs/latest/rules/capitalized-comments
    'capitalized-comments': 'off',
    // https://eslint.org/docs/latest/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],
    // https://eslint.org/docs/latest/rules/comma-spacing
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/comma-style
    'comma-style': ['error', 'last'],
    // https://eslint.org/docs/latest/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/consistent-this
    'consistent-this': ['error', 'self'],
    // https://eslint.org/docs/latest/rules/eol-last
    'eol-last': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/func-name-matching
    'func-name-matching': ['error', 'always', { considerPropertyDescriptor: true }],
    // https://eslint.org/docs/latest/rules/func-names
    'func-names': 'off',
    // https://eslint.org/docs/latest/rules/func-style
    'func-style': 'off',
    // https://eslint.org/docs/latest/rules/function-paren-newline
    'function-paren-newline': ['error', 'multiline'],
    // https://eslint.org/docs/latest/rules/id-denylist
    'id-denylist': 'off',
    // https://eslint.org/docs/latest/rules/id-length
    'id-length': 'off',
    // https://eslint.org/docs/latest/rules/id-match
    'id-match': 'off',
    // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],
    // https://eslint.org/docs/latest/rules/indent
    indent: 'off',
    // https://eslint.org/docs/latest/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],
    // https://eslint.org/docs/latest/rules/key-spacing
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    // https://eslint.org/docs/latest/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/line-comment-position
    'line-comment-position': 'off',
    // https://eslint.org/docs/latest/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],
    // https://eslint.org/docs/latest/rules/lines-around-comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowClassStart: true,
        allowClassEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false,
      },
    ],
    // https://eslint.org/docs/latest/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/max-depth
    'max-depth': ['error', 30],
    // https://eslint.org/docs/latest/rules/max-len
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/max-lines
    'max-lines': 'off',
    // https://eslint.org/docs/latest/rules/max-lines-per-function
    'max-lines-per-function': 'off',
    // https://eslint.org/docs/latest/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', 9],
    // https://eslint.org/docs/latest/rules/max-params
    'max-params': 'off',
    // https://eslint.org/docs/latest/rules/max-statements
    'max-statements': 'off',
    // https://eslint.org/docs/latest/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],
    // https://eslint.org/docs/latest/rules/multiline-comment-style
    'multiline-comment-style': 'off',
    // 'multiline-comment-style': ['error', 'starred-block'],
    // https://eslint.org/docs/latest/rules/multiline-ternary
    'multiline-ternary': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/new-cap
    'new-cap': 'off',
    '@babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/new-parens
    'new-parens': 'error',
    // https://eslint.org/docs/latest/rules/newline-per-chained-call
    'newline-per-chained-call': 'off',
    // https://eslint.org/docs/latest/rules/no-array-constructor
    'no-array-constructor': 'error',
    // https://eslint.org/docs/latest/rules/no-bitwise
    'no-bitwise': 'error',
    // https://eslint.org/docs/latest/rules/no-continue
    'no-continue': 'off',
    // https://eslint.org/docs/latest/rules/no-inline-comments
    'no-inline-comments': 'off',
    // https://eslint.org/docs/latest/rules/no-lonely-if
    'no-lonely-if': 'error',
    // https://eslint.org/docs/latest/rules/no-mixed-operators
    'no-mixed-operators': 'off',
    // https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',
    // https://eslint.org/docs/latest/rules/no-multi-assign
    'no-multi-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 1,
      },
    ],
    // https://eslint.org/docs/latest/rules/no-negated-condition
    'no-negated-condition': 'off',
    // https://eslint.org/docs/latest/rules/no-nested-ternary
    'no-nested-ternary': 'off',
    // https://eslint.org/docs/latest/rules/no-new-object
    'no-new-object': 'error',
    // https://eslint.org/docs/latest/rules/no-plusplus
    'no-plusplus': 'off',
    // https://eslint.org/docs/latest/rules/no-restricted-syntax
    'no-restricted-syntax': 'off',
    // https://eslint.org/docs/latest/rules/no-tabs
    'no-tabs': 'error',
    // https://eslint.org/docs/latest/rules/no-ternary
    'no-ternary': 'off',
    // https://eslint.org/docs/latest/rules/no-trailing-spaces
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],
    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',
    // https://eslint.org/docs/latest/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    // https://eslint.org/docs/latest/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',
    // https://eslint.org/docs/latest/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside'],
    // https://eslint.org/docs/latest/rules/object-curly-newline
    'object-curly-newline': ['error', { multiline: true }],
    // https://eslint.org/docs/latest/rules/object-curly-spacing
    'object-curly-spacing': 'off',
    '@babel/object-curly-spacing': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/object-property-newline
    'object-property-newline': 'off',
    // https://eslint.org/docs/latest/rules/one-var
    'one-var': 'off',
    // 'one-var': [
    //   'error',
    //   {
    //     initialized: 'never',
    //     uninitialized: 'consecutive',
    //   },
    // ],
    // https://eslint.org/docs/latest/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'initializations'],
    // https://eslint.org/docs/latest/rules/operator-assignment
    'operator-assignment': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/operator-linebreak
    'operator-linebreak': ['error', 'before'],
    // https://eslint.org/docs/latest/rules/padded-blocks
    'padded-blocks': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',
    // https://eslint.org/docs/latest/rules/prefer-object-spread
    'prefer-object-spread': 'error',
    // https://eslint.org/docs/latest/rules/quote-props
    'quote-props': ['error', 'as-needed'],
    // https://eslint.org/docs/latest/rules/quotes
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/semi
    semi: 'off',
    '@babel/semi': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/semi-spacing
    'semi-spacing': 'error',
    // https://eslint.org/docs/latest/rules/semi-style
    'semi-style': ['error', 'last'],
    // https://eslint.org/docs/latest/rules/sort-keys
    'sort-keys': 'off',
    // https://eslint.org/docs/latest/rules/sort-vars
    'sort-vars': 'off',
    // https://eslint.org/docs/latest/rules/space-before-blocks
    'space-before-blocks': 'error',
    // https://eslint.org/docs/latest/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    // https://eslint.org/docs/latest/rules/space-in-parens
    'space-in-parens': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/space-infix-ops
    'space-infix-ops': 'error',
    // https://eslint.org/docs/latest/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    // https://eslint.org/docs/latest/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/', '!'],
          exceptions: ['-', '+', '-+', '=', '*'],
        },
        block: {
          markers: ['/', '!'],
          exceptions: ['-', '+', '-+', '=', '*'],
          balanced: true,
        },
      },
    ],
    // https://eslint.org/docs/latest/rules/switch-colon-spacing
    'switch-colon-spacing': 'error',
    // https://eslint.org/docs/latest/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/unicode-bom
    'unicode-bom': 'error',
    // https://eslint.org/docs/latest/rules/wrap-regex
    'wrap-regex': 'off',

    /*
     * ECMAScript 6
     * https://eslint.org/docs/latest/rules/arrow-body-style
     */
    'arrow-body-style': 'off',
    // https://eslint.org/docs/latest/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],
    // https://eslint.org/docs/latest/rules/arrow-spacing
    'arrow-spacing': 'error',
    // https://eslint.org/docs/latest/rules/constructor-super
    'constructor-super': 'error',
    // https://eslint.org/docs/latest/rules/generator-star-spacing
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/no-class-assign
    'no-class-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', { allowParens: true }],
    // https://eslint.org/docs/latest/rules/no-const-assign
    'no-const-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',
    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',
    // https://eslint.org/docs/latest/rules/no-new-symbol
    'no-new-symbol': 'error',
    // https://eslint.org/docs/latest/rules/no-restricted-imports
    'no-restricted-imports': 'error',
    // https://eslint.org/docs/latest/rules/no-this-before-super
    'no-this-before-super': 'error',
    // https://eslint.org/docs/latest/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',
    // https://eslint.org/docs/latest/rules/no-useless-constructor
    'no-useless-constructor': 'error',
    // https://eslint.org/docs/latest/rules/no-useless-rename
    'no-useless-rename': 'error',
    // https://eslint.org/docs/latest/rules/no-var
    'no-var': 'error',
    // https://eslint.org/docs/latest/rules/object-shorthand
    'object-shorthand': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'off',
    // https://eslint.org/docs/latest/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      { enforceForRenamedProperties: false },
    ],
    // https://eslint.org/docs/latest/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',
    // https://eslint.org/docs/latest/rules/prefer-rest-params
    'prefer-rest-params': 'error',
    // https://eslint.org/docs/latest/rules/prefer-spread
    'prefer-spread': 'error',
    // https://eslint.org/docs/latest/rules/prefer-template
    'prefer-template': 'error',
    // https://eslint.org/docs/latest/rules/require-yield
    'require-yield': 'error',
    // https://eslint.org/docs/latest/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/sort-imports
    // prefer import/order
    'sort-imports': 'off',
    // https://eslint.org/docs/latest/rules/symbol-description
    'symbol-description': 'off',
    // https://eslint.org/docs/latest/rules/template-curly-spacing
    'template-curly-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
    // https://eslint.org/docs/latest/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'never'],

    'prettier/prettier': ['error', PrettierConfig],

    /*
     * import
     * Static analysis
     * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md
    // @bug
    'import/named': 'off',
    // 'import/named': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
    'import/default': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
    'import/namespace': ['error', { allowComputed: true }],
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-internal-modules.md
    'import/no-internal-modules': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unused-modules.md
    'import/no-unused-modules': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'off',

    /*
     * Helpful warnings
     * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/export.md
     */
    'import/export': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md
    // takes too many times to analysis
    // 'import/no-deprecated': 'error',
    'import/no-deprecated': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    /*
     * Module systems
     * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/unambiguous.md
     */
    'import/unambiguous': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
    'import/no-commonjs': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-amd.md
    'import/no-amd': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/first.md
    'import/first': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
    'import/exports-last': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md
    'import/no-namespace': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/extensions.md
    'import/extensions': 'off',
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //     mjs: 'never',
    //     mjsx: 'never',
    //     cjs: 'never',
    //     cjsx: 'never',
    //   },
    // ],
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/order.md
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [['builtin', 'external'], 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
          },
          {
            pattern: '@@/**',
            group: 'external',
          },
        ],
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/max-dependencies.md
    'import/max-dependencies': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-default.md
    'import/no-named-default': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
    'import/group-exports': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md
    'import/no-self-import': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-default-export.md
    'import/no-default-export': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-export.md
    'import/no-named-export': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md
    'import/no-cycle': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'off',

    /**
     * eslint-comments
     */
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/HEAD/docs/rules/disable-enable-pair.md
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: false }],
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/HEAD/docs/rules/no-duplicate-disable.md
    'eslint-comments/no-duplicate-disable': 'error',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/HEAD/docs/rules/no-unlimited-disable.md
    'eslint-comments/no-unlimited-disable': 'error',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/HEAD/docs/rules/no-unused-disable.md
    'eslint-comments/no-unused-disable': 'error',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/HEAD/docs/rules/no-unused-enable.md
    'eslint-comments/no-unused-enable': 'error',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/HEAD/docs/rules/no-use.md
    'eslint-comments/no-use': [
      'error',
      {
        allow: [
          // 'eslint',
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
          'eslint-env', // "exported",
          // "global",
          // "globals",
        ],
      },
    ],
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/HEAD/docs/rules/no-aggregating-enable.md
    'eslint-comments/no-aggregating-enable': 'error',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/HEAD/docs/rules/no-restricted-disable.md
    'eslint-comments/no-restricted-disable': 'off',

    /*
     * promise
     * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/catch-or-return.md
     */
    'promise/catch-or-return': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-return-wrap.md
    'promise/no-return-wrap': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/param-names.md
    'promise/param-names': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/always-return.md
    'promise/always-return': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-native.md
    'promise/no-native': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-nesting.md
    'promise/no-nesting': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-promise-in-callback.md
    'promise/no-promise-in-callback': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-callback-in-promise.md
    'promise/no-callback-in-promise': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/avoid-new.md
    'promise/avoid-new': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-new-statics.md
    'promise/no-new-statics': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-return-in-finally.md
    'promise/no-return-in-finally': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/valid-params.md
    'promise/valid-params': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/prefer-await-to-then.md
    'promise/prefer-await-to-then': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/prefer-await-to-callbacks.md
    'promise/prefer-await-to-callbacks': 'off',

    // https://www.npmjs.com/package/eslint-plugin-file-progress
    'file-progress/activate': 'warn',
  },
  settings: {
    'import/extensions': [...FileExtensions],
    'import/ignore': ['@babel/', 'typescript'],
    'import/resolver': { node: { extensions: [...FileExtensions] } },
  },
  // https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
  // https://eslint.org/docs/user-guide/migrating-to-6.0.0#-overrides-in-an-extended-config-file-can-now-be-overridden-by-a-parent-config-file
  overrides: [
    {
      files: mapElementWithPrefix(TSFileExtensions, '*'),
      /**
       * prefer type checker
       */
      env: {
        browser: true,
        commonjs: true,
        jest: true,
        mocha: true,
        node: true,
      },
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
      plugins: ['@typescript-eslint'],
      // @bug
      // extends: ['plugin:@typescript-eslint/recommended'],
      // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/config/typescript.js
      settings: {
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': { '@typescript-eslint/parser': [...TSFileExtensions] },
        'import/resolver': {
          node: { extensions: [...FileExtensions] },
          typescript: {
            extensionAlias: {
              '.js': [...TSFileExtensions, ...mapElementWithPrefix(TSFileExtensions, '.d'), '.js'],
              '.jsx': [
                ...TSFileExtensions,
                ...mapElementWithPrefix(TSFileExtensions, '.d'),
                '.jsx',
              ].filter(ext => ext.endsWith('x')),
              '.cjs': [...CTSFileExtensions, ...CJSFileExtensions],
              '.mjs': [...MTSFileExtensions, ...MJSFileExtensions],
            },
            project: './tsconfig.json',
          },
        },
      },
      rules: {
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/config/typescript.js
        /**
         * prefer type checker
         */
        // https://eslint.org/docs/latest/rules/array-callback-return
        'array-callback-return': 'off',
        // https://eslint.org/docs/latest/rules/no-dupe-else-if
        'no-dupe-else-if': 'off',
        // https://eslint.org/docs/latest/rules/no-import-assign
        'no-import-assign': 'off',
        // https://eslint.org/docs/latest/rules/no-undef
        'no-undef': 'off',
        // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
        'no-unsafe-optional-chaining': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
        'import/default': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/export.md
        'import/export': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md
        'import/named': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
        'import/namespace': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',
        // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-new-statics.md
        'promise/no-new-statics': 'off',
        // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-return-in-finally.md
        'promise/no-return-in-finally': 'off',
        // https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/valid-params.md
        'promise/valid-params': 'off',

        // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        // https://typescript-eslint.io/rules/adjacent-overload-signatures
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        // https://typescript-eslint.io/rules/array-type
        '@typescript-eslint/array-type': 'error',
        // https://typescript-eslint.io/rules/await-thenable
        '@typescript-eslint/await-thenable': 'error',
        // https://typescript-eslint.io/rules/ban-ts-comment
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-check': false,
            'ts-expect-error': false,
            'ts-ignore': true,
            'ts-nocheck': true,
          },
        ],
        // https://typescript-eslint.io/rules/ban-types
        '@typescript-eslint/ban-types': 'error',
        // https://typescript-eslint.io/rules/ban-tslint-comment
        '@typescript-eslint/ban-tslint-comment': 'error',
        // https://typescript-eslint.io/rules/class-literal-property-style
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        // https://typescript-eslint.io/rules/consistent-indexed-object-style
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        // https://typescript-eslint.io/rules/consistent-type-assertions
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
        // https://typescript-eslint.io/rules/consistent-type-definitions
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // https://typescript-eslint.io/rules/consistent-type-imports
        'no-duplicate-imports': 'off',
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        // https://typescript-eslint.io/rules/explicit-function-return-type
        '@typescript-eslint/explicit-function-return-type': 'off',
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        '@typescript-eslint/explicit-member-accessibility': 'error',
        // https://typescript-eslint.io/rules/explicit-module-boundary-types
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        // https://typescript-eslint.io/rules/member-delimiter-style
        '@typescript-eslint/member-delimiter-style': 'error',
        // https://typescript-eslint.io/rules/member-ordering
        // @bug no fixer available & conflict with @typescript-eslint/adjacent-overload-signatures
        '@typescript-eslint/member-ordering': 'off',
        // '@typescript-eslint/member-ordering': [
        //   'error',
        //   {
        //     default: [
        //       // Index signature
        //       'signature',

        //       // Static Fields
        //       'public-static-field',
        //       'protected-static-field',
        //       'private-static-field',
        //       'static-field',

        //       // Static Accessors
        //       'public-static-get',
        //       'public-static-set',
        //       'protected-static-get',
        //       'protected-static-set',
        //       'private-static-get',
        //       'private-static-set',
        //       'static-get',
        //       'static-set',

        //       // Static Methods
        //       'public-static-method',
        //       'protected-static-method',
        //       'private-static-method',
        //       'static-method',

        //       // Fields
        //       'public-decorated-field',
        //       'protected-decorated-field',
        //       'private-decorated-field',
        //       'decorated-field',

        //       'public-instance-field',
        //       'protected-instance-field',
        //       'private-instance-field',
        //       'instance-field',

        //       'public-abstract-field',
        //       'protected-abstract-field',
        //       'private-abstract-field',
        //       'abstract-field',

        //       'public-field',
        //       'protected-field',
        //       'private-field',
        //       'field',

        //       // Accessors
        //       'public-decorated-get',
        //       'public-decorated-set',
        //       'protected-decorated-get',
        //       'protected-decorated-set',
        //       'private-decorated-get',
        //       'private-decorated-set',
        //       'decorated-get',
        //       'decorated-set',

        //       'public-instance-get',
        //       'public-instance-set',
        //       'protected-instance-get',
        //       'protected-instance-set',
        //       'private-instance-get',
        //       'private-instance-set',
        //       'instance-get',
        //       'instance-set',

        //       'public-abstract-get',
        //       'public-abstract-set',
        //       'protected-abstract-get',
        //       'protected-abstract-set',
        //       'private-abstract-get',
        //       'private-abstract-set',
        //       'abstract-get',
        //       'abstract-set',

        //       'public-get',
        //       'public-set',
        //       'protected-get',
        //       'protected-set',
        //       'private-get',
        //       'private-set',
        //       'get',
        //       'set',

        //       // Constructors
        //       'public-constructor',
        //       'protected-constructor',
        //       'private-constructor',
        //       'constructor',

        //       // Methods

        //       'public-decorated-method',
        //       'protected-decorated-method',
        //       'private-decorated-method',
        //       'decorated-method',

        //       'public-instance-method',
        //       'protected-instance-method',
        //       'private-instance-method',
        //       'instance-method',

        //       'public-abstract-method',
        //       'protected-abstract-method',
        //       'private-abstract-method',
        //       'abstract-method',

        //       'public-method',
        //       'protected-method',
        //       'private-method',
        //       'method',
        //     ],
        //   },
        // ],
        // https://typescript-eslint.io/rules/method-signature-style
        '@typescript-eslint/method-signature-style': 'error',
        // https://typescript-eslint.io/rules/naming-convention
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
            leadingUnderscore: 'allowSingleOrDouble',
            trailingUnderscore: 'allowSingleOrDouble',
          },
          {
            selector: 'property',
            format: null,
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        // https://typescript-eslint.io/rules/no-array-constructor
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        // https://typescript-eslint.io/rules/no-empty-interface
        '@typescript-eslint/no-empty-interface': 'off',
        // https://typescript-eslint.io/rules/no-explicit-any
        '@typescript-eslint/no-explicit-any': 'off',
        // https://typescript-eslint.io/rules/no-extraneous-class
        '@typescript-eslint/no-extraneous-class': 'error',
        // https://typescript-eslint.io/rules/no-for-in-array
        '@typescript-eslint/no-for-in-array': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
        '@typescript-eslint/no-implicit-any-catch': 'off',
        // https://typescript-eslint.io/rules/no-invalid-void-type
        '@typescript-eslint/no-invalid-void-type': 'off',
        // https://typescript-eslint.io/rules/no-inferrable-types
        '@typescript-eslint/no-inferrable-types': 'off',
        // https://typescript-eslint.io/rules/no-misused-new
        '@typescript-eslint/no-misused-new': 'error',
        // https://typescript-eslint.io/rules/no-namespace
        '@typescript-eslint/no-namespace': 'error',
        // https://typescript-eslint.io/rules/no-base-to-string
        '@typescript-eslint/no-base-to-string': 'error',
        // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        // https://typescript-eslint.io/rules/no-confusing-void-expression
        '@typescript-eslint/no-confusing-void-expression': 'off',
        // https://typescript-eslint.io/rules/no-non-null-assertion
        '@typescript-eslint/no-non-null-assertion': 'off',
        // https://typescript-eslint.io/rules/no-extra-non-null-assertion
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        // https://typescript-eslint.io/rules/no-parameter-properties
        '@typescript-eslint/no-parameter-properties': 'error',
        // https://typescript-eslint.io/rules/no-require-imports
        '@typescript-eslint/no-require-imports': 'error',
        // https://typescript-eslint.io/rules/no-this-alias
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        // https://typescript-eslint.io/rules/no-type-alias
        '@typescript-eslint/no-type-alias': 'off',
        // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        // https://typescript-eslint.io/rules/no-unnecessary-condition
        '@typescript-eslint/no-unnecessary-condition': 'off',
        // https://typescript-eslint.io/rules/no-unnecessary-qualifier
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        // https://typescript-eslint.io/rules/no-unsafe-assignment
        '@typescript-eslint/no-unsafe-assignment': 'off',
        // https://typescript-eslint.io/rules/no-unsafe-call
        '@typescript-eslint/no-unsafe-call': 'off',
        // https://typescript-eslint.io/rules/no-unsafe-member-access
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // https://typescript-eslint.io/rules/no-unsafe-return
        '@typescript-eslint/no-unsafe-return': 'off',
        // https://typescript-eslint.io/rules/no-unused-vars
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all',
          },
        ],
        '@babel/no-unused-expressions': 'off',
        // https://typescript-eslint.io/rules/no-unused-expressions
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowTaggedTemplates: true,
            enforceForJSX: true,
          },
        ],
        // https://typescript-eslint.io/rules/no-use-before-define
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            classes: false,
            functions: false,
            variables: false,
          },
        ],
        // https://typescript-eslint.io/rules/no-useless-constructor
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        // https://typescript-eslint.io/rules/no-var-requires
        '@typescript-eslint/no-var-requires': 'error',
        // https://typescript-eslint.io/rules/prefer-as-const
        '@typescript-eslint/prefer-as-const': 'error',
        // https://typescript-eslint.io/rules/prefer-enum-initializers
        '@typescript-eslint/prefer-enum-initializers': 'off',
        // https://typescript-eslint.io/rules/prefer-for-of
        '@typescript-eslint/prefer-for-of': 'error',
        // https://typescript-eslint.io/rules/prefer-function-type
        '@typescript-eslint/prefer-function-type': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/pull/294
        '@typescript-eslint/prefer-includes': 'error',
        // https://typescript-eslint.io/rules/prefer-namespace-keyword
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/pull/289
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        // https://typescript-eslint.io/rules/prefer-literal-enum-member
        '@typescript-eslint/prefer-literal-enum-member': [
          'error',
          { allowBitwiseExpressions: true },
        ],
        // https://typescript-eslint.io/rules/prefer-optional-chain
        '@typescript-eslint/prefer-optional-chain': 'error',
        // https://typescript-eslint.io/rules/prefer-nullish-coalescing
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        // https://typescript-eslint.io/rules/prefer-ts-expect-error
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        // https://typescript-eslint.io/rules/promise-function-async
        // @bug
        '@typescript-eslint/promise-function-async': 'off',
        // https://typescript-eslint.io/rules/require-array-sort-compare
        '@typescript-eslint/require-array-sort-compare': 'off',
        // https://typescript-eslint.io/rules/restrict-plus-operands
        '@typescript-eslint/restrict-plus-operands': 'error',
        // https://typescript-eslint.io/rules/restrict-template-expressions
        '@typescript-eslint/restrict-template-expressions': 'off',
        // https://typescript-eslint.io/rules/switch-exhaustiveness-check
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        // https://typescript-eslint.io/rules/triple-slash-reference
        '@typescript-eslint/triple-slash-reference': 'off',
        // https://typescript-eslint.io/rules/type-annotation-spacing
        '@typescript-eslint/type-annotation-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],
        // https://typescript-eslint.io/rules/unbound-method
        // takes too many times to analysis
        // '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unbound-method': 'off',
        // https://typescript-eslint.io/rules/unified-signatures
        '@typescript-eslint/unified-signatures': 'error',
        // https://typescript-eslint.io/rules/func-call-spacing
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        // https://typescript-eslint.io/rules/no-magic-numbers
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        // https://typescript-eslint.io/rules/semi
        semi: 'off',
        '@typescript-eslint/semi': 'off',
        // https://typescript-eslint.io/rules/prefer-regexp-exec
        '@typescript-eslint/prefer-regexp-exec': 'error',
        // https://typescript-eslint.io/rules/no-empty-function
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        // https://typescript-eslint.io/rules/no-floating-promises
        '@typescript-eslint/no-floating-promises': 'error',
        // https://typescript-eslint.io/rules/strict-boolean-expressions
        '@typescript-eslint/strict-boolean-expressions': 'off',
        // https://typescript-eslint.io/rules/prefer-readonly
        '@typescript-eslint/prefer-readonly': 'error',
        // https://typescript-eslint.io/rules/no-misused-promises
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        // https://typescript-eslint.io/rules/require-await
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        // https://typescript-eslint.io/rules/return-await
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        // https://typescript-eslint.io/rules/typedef
        '@typescript-eslint/typedef': [
          'error',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: true,
            objectDestructuring: false,
            parameter: false,
            propertyDeclaration: true,
            variableDeclaration: false,
            variableDeclarationIgnoreFunction: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin//docs/rules/no-unnecessary-type-arguments.md
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin//docs/rules/brace-style.md
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        // https://typescript-eslint.io/rules/comma-dangle
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        // https://typescript-eslint.io/rules/comma-spacing
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],
        // https://typescript-eslint.io/rules/dot-notation
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
        // https://typescript-eslint.io/rules/keyword-spacing
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': [
          'error',
          {
            before: true,
            after: true,
          },
        ],
        // https://typescript-eslint.io/rules/lines-between-class-members
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always'],
        // https://typescript-eslint.io/rules/no-dupe-class-members
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        // https://typescript-eslint.io/rules/no-extra-parens
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
        // https://typescript-eslint.io/rules/no-extra-semi
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        // https://typescript-eslint.io/rules/no-implied-eval
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        // https://typescript-eslint.io/rules/no-loop-func
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        // https://typescript-eslint.io/rules/no-redeclare
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true }],
        // https://typescript-eslint.io/rules/no-shadow
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            allow: [],
            builtinGlobals: false,
          },
        ],
        // https://typescript-eslint.io/rules/no-throw-literal
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        // https://typescript-eslint.io/rules/space-before-function-paren
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
          },
        ],
        // https://typescript-eslint.io/rules/space-infix-ops
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
      },
    },
    {
      files: mapElementWithPrefix([...CJSFileExtensions, ...CTSFileExtensions], '*'),
      env: {
        commonjs: true,
      },
      rules: {
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
        'import/no-commonjs': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
        'import/no-dynamic-require': 'off',
      },
    },
    {
      files: mapElementWithPrefix(CTSFileExtensions, '*'),
      rules: {
        // https://typescript-eslint.io/rules/no-require-imports
        '@typescript-eslint/no-require-imports': 'off',
        // https://typescript-eslint.io/rules/no-var-requires
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: mapElementWithPrefix([...MJSFileExtensions, ...MTSFileExtensions], '*'),
      env: {
        commonjs: false,
      },
      rules: {
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
        'import/no-commonjs': 'error',
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
        'import/no-dynamic-require': 'error',
      },
    },
    {
      files: mapElementWithPrefix(MTSFileExtensions, '*'),
      rules: {
        // https://typescript-eslint.io/rules/no-require-imports
        '@typescript-eslint/no-require-imports': 'error',
        // https://typescript-eslint.io/rules/no-var-requires
        '@typescript-eslint/no-var-requires': 'error',
      },
    },
    {
      files: ['*.test.*', '*.spec.*', '**/__test__/**'],
      env: {
        jest: true,
        mocha: true,
      },
      rules: {
        'no-unused-expressions': 'off',
        '@babel/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
    {
      files: ['*.worker.*'],
      env: { worker: true },
    },
    {
      files: ['*service-worker.*'],
      env: { serviceworker: true },
    },
    // 上述部分规则与 prettier 存在冲突的，以 prettier 为准
    {
      files: ['**/*'],
      extends: ['prettier'],
    },
  ],
};
