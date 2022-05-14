import BabelPresetEnv from '@babel/preset-env';
import BabelPresetReact from '@babel/preset-react';
import * as PrettierConfig from '@imhele/prettier-config';
import type { Linter } from 'eslint';

export const JSFileExtensions: readonly string[] = [
  '.js',
  '.jsx',
  '.mjs',
  '.mjsx',
  '.cjs',
  '.cjsx',
];

export const TSFileExtensions: readonly string[] = [
  '.ts',
  '.tsx',
  '.mts',
  '.mtsx',
  '.cts',
  '.ctsx',
];

export const DTSFileExtensions: readonly string[] = TSFileExtensions.map(ext => `.d${ext}`);

export const TSFilePatterns: readonly string[] = TSFileExtensions.map(ext => `*${ext}`);

export const FileExtensions: readonly string[] = [
  ...JSFileExtensions,
  ...TSFileExtensions,
  ...DTSFileExtensions,
];

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
  ignorePatterns: ['!.*rc.*', 'build/', 'dist/', 'node_modules/', 'release/'],
  plugins: [
    // https://www.npmjs.com/package/@babel/eslint-plugin
    '@babel',
    // https://www.npmjs.com/package/eslint-plugin-import
    'import',
    // https://www.npmjs.com/package/eslint-plugin-eslint-comments
    'eslint-comments',
    // https://www.npmjs.com/package/eslint-plugin-filenames
    'promise',
    // https://www.npmjs.com/package/eslint-plugin-filenames
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
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'off',
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'off',
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],
    // https://eslint.org/docs/rules/no-console
    'no-console': 'error',
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'error',
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',
    // https://eslint.org/docs/rules/no-empty
    'no-empty': ['error', { allowEmptyCatch: true }],
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['error', 'all'],
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': ['error', 'both'],
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': ['error', { allowConstructorFlags: [] }],
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: false,
        skipTemplates: false,
        skipComments: false,
        skipRegExps: true,
      },
    ],
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',
    // https://eslint.org/docs/rules/require-atomic-updates
    // @bug https://github.com/eslint/eslint/issues/11899
    'require-atomic-updates': 'warn',
    // 'require-atomic-updates': 'error',
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],

    /*
     * Best Practices
     * https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'error',
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',
    // https://eslint.org/docs/rules/complexity
    complexity: ['warn', { max: 30 }],
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-or-nest', 'consistent'],
    // https://eslint.org/docs/rules/default-case
    'default-case': 'error',
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true }],
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always'],
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'off',
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'off',
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'error',
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'off',
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'error',
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',
    '@babel/no-invalid-this': 'error',
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',
    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'off',
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'off',
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': ['error', { builtinGlobals: true }],
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
    ],
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'except-parens'],
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'off',
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',
    // https://eslint.org/docs/rules/no-sequences
    // @bug conflict with prettier
    'no-sequences': 'off',
    // 'no-sequences': 'error',
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'off',
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': ['error', { terms: ['@TEMP'] }],
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',
    // https://eslint.org/docs/rules/radix
    radix: 'error',
    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',
    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'inside'],
    // https://eslint.org/docs/rules/yoda
    yoda: 'off',
    // https://eslint.org/docs/rules/strict
    strict: ['error', 'never'],

    /*
     * Variables
     * https://eslint.org/docs/rules/init-declarations
     */
    'init-declarations': 'off',
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'off',
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'error',
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': [
      'error',
      {
        allow: [],
        builtinGlobals: false,
      },
    ],
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',
    // https://eslint.org/docs/rules/no-unused-vars
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
    // https://eslint.org/docs/rules/no-use-before-define
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
     * https://eslint.org/docs/rules/array-bracket-newline
     */
    'array-bracket-newline': ['error', 'consistent'],
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['error', 'consistent'],
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],
    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        properties: 'never',
      },
    ],
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'off',
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    // https://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': ['error', 'self'],
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['error', 'always', { considerPropertyDescriptor: true }],
    // https://eslint.org/docs/rules/func-names
    'func-names': 'off',
    // https://eslint.org/docs/rules/func-style
    'func-style': 'off',
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'multiline'],
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',
    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',
    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],
    // https://eslint.org/docs/rules/indent
    indent: 'off',
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'off',
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],
    // https://eslint.org/docs/rules/lines-around-comment
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
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always'],
    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['warn', 30],
    // https://eslint.org/docs/rules/max-len
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
    // https://eslint.org/docs/rules/max-lines
    'max-lines': 'off',
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'off',
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['warn', 4],
    // https://eslint.org/docs/rules/max-params
    'max-params': 'off',
    // https://eslint.org/docs/rules/max-statements
    'max-statements': 'off',
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',
    // 'multiline-comment-style': ['error', 'starred-block'],
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['error', 'never'],
    // https://eslint.org/docs/rules/new-cap
    'new-cap': 'off',
    '@babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': 'off',
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'off',
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 1,
      },
    ],
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'off',
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'off',
    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside'],
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', { multiline: true }],
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': 'off',
    '@babel/object-curly-spacing': ['error', 'always'],
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': 'off',
    // https://eslint.org/docs/rules/one-var
    'one-var': 'off',
    // 'one-var': [
    //   'error',
    //   {
    //     initialized: 'never',
    //     uninitialized: 'consecutive',
    //   },
    // ],
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'initializations'],
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before'],
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'as-needed'],
    // https://eslint.org/docs/rules/quotes
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // https://eslint.org/docs/rules/semi
    semi: 'off',
    '@babel/semi': ['error', 'always'],
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': 'error',
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': 'off',
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    // https://eslint.org/docs/rules/spaced-comment
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
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': 'error',
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': 'error',
    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',

    /*
     * ECMAScript 6
     * https://eslint.org/docs/rules/arrow-body-style
     */
    'arrow-body-style': 'off',
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'error',
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', { allowParens: true }],
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'error',
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'error',
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always'],
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'off',
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      { enforceForRenamedProperties: false },
    ],
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],
    // https://eslint.org/docs/rules/sort-imports
    // prefer import/order
    'sort-imports': 'off',
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'off',
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': ['error', 'never'],
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'never'],

    'prettier/prettier': ['error', PrettierConfig],

    /*
     * import
     * Static analysis
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    // @bug
    'import/named': 'off',
    // 'import/named': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    'import/default': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': ['error', { allowComputed: true }],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'warn',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-internal-modules': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    // @bug
    'import/no-unused-modules': 'off',
    // 'import/no-unused-modules': [
    //   'error',
    //   {
    //     missingExports: false,
    //     unusedExports: true,
    //   },
    // ],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'off',

    /*
     * Helpful warnings
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
     */
    'import/export': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    // takes too many times to analysis
    // 'import/no-deprecated': 'error',
    'import/no-deprecated': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    /*
     * Module systems
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
     */
    'import/unambiguous': 'off',

    /*
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
     * @TIPS
     * for the following 'require' usages:
     * 1. dynamic module path -
     *    explicitly declare `eslint-disable` when truly necessary
     * 2. dependencies determined at runtime -
     *    dynamic import,
     *    or es6 import + tree shaking,
     *    or explicitly declare `eslint-disable` when truly necessary
     * 3. side effect module -
     *    `import 'xxx'` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Import_a_module_for_its_side_effects_only)
     * 4. async require or promise-loader -
     *    dynamic import (`import('xxx').then()`)
     * for 'modules.exports = jsonData' usage:
     * solutions:
     * #1: use JSON format
     * #2: use es6 export
     * export const wechatPayGray = 'xxxx'
     * #3: export named object
     * const iconPath = {
     *   wechatPayGray: 'xxxx',
     *   // ...
     * }
     * export default iconPath
     */
    'import/no-commonjs': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
    'import/exports-last': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // @bug
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
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
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
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
    'import/group-exports': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': 'error',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
    'import/no-named-export': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error'],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
    // @TODO
    'import/dynamic-import-chunkname': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'off',
    // 'import/no-relative-parent-imports': 'error',

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
     * https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
     */
    'promise/catch-or-return': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
    'promise/no-return-wrap': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
    'promise/param-names': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
    'promise/always-return': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md
    'promise/no-native': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
    'promise/no-nesting': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md
    'promise/no-promise-in-callback': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise.md
    'promise/no-callback-in-promise': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md
    'promise/avoid-new': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
    'promise/no-new-statics': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
    'promise/valid-params': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md
    'promise/prefer-await-to-then': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md
    'promise/prefer-await-to-callbacks': 'off',

    // https://www.npmjs.com/package/eslint-plugin-file-progress
    'file-progress/activate': 'warn',
  },
  settings: {
    'import/extensions': FileExtensions,
    'import/resolver': { node: { extensions: FileExtensions } },
  },
  // https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
  // https://eslint.org/docs/user-guide/migrating-to-6.0.0#-overrides-in-an-extended-config-file-can-now-be-overridden-by-a-parent-config-file
  overrides: [
    {
      files: [...TSFilePatterns],
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
      // https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
      settings: {
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': { '@typescript-eslint/parser': [...TSFilePatterns] },
        'import/resolver': { node: { extensions: [...FileExtensions] } },
      },
      rules: {
        // https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
        // subset of typescript rules
        'no-undef': 'off',
        'prefer-named-capture-group': 'off',
        'import/namespace': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
        '@typescript-eslint/array-type': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
        '@typescript-eslint/await-thenable': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-check': false,
            'ts-expect-error': false,
            'ts-ignore': true,
            'ts-nocheck': true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
        '@typescript-eslint/ban-types': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
        '@typescript-eslint/ban-tslint-comment': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        'no-duplicate-imports': 'off',
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        '@typescript-eslint/explicit-function-return-type': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        '@typescript-eslint/explicit-member-accessibility': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        '@typescript-eslint/member-delimiter-style': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
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
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
        '@typescript-eslint/method-signature-style': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
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
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        '@typescript-eslint/no-empty-interface': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
        '@typescript-eslint/no-explicit-any': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
        '@typescript-eslint/no-extraneous-class': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
        '@typescript-eslint/no-for-in-array': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
        '@typescript-eslint/no-implicit-any-catch': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
        '@typescript-eslint/no-invalid-void-type': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
        '@typescript-eslint/no-inferrable-types': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
        '@typescript-eslint/no-misused-new': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
        '@typescript-eslint/no-namespace': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
        '@typescript-eslint/no-base-to-string': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
        '@typescript-eslint/no-confusing-void-expression': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
        '@typescript-eslint/no-non-null-assertion': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
        '@typescript-eslint/no-parameter-properties': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
        '@typescript-eslint/no-require-imports': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
        '@typescript-eslint/no-type-alias': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
        '@typescript-eslint/no-unnecessary-condition': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
        '@typescript-eslint/no-unsafe-assignment': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
        '@typescript-eslint/no-unsafe-call': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
        '@typescript-eslint/no-unsafe-return': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
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
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowTaggedTemplates: true,
            enforceForJSX: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            classes: false,
            functions: false,
            variables: false,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
        '@typescript-eslint/no-var-requires': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
        '@typescript-eslint/prefer-as-const': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
        '@typescript-eslint/prefer-enum-initializers': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
        '@typescript-eslint/prefer-for-of': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
        '@typescript-eslint/prefer-function-type': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/pull/294
        '@typescript-eslint/prefer-includes': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/pull/289
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
        '@typescript-eslint/prefer-literal-enum-member': [
          'error',
          { allowBitwiseExpressions: true },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
        '@typescript-eslint/prefer-optional-chain': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
        // @bug
        '@typescript-eslint/promise-function-async': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
        '@typescript-eslint/require-array-sort-compare': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
        '@typescript-eslint/restrict-plus-operands': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
        '@typescript-eslint/restrict-template-expressions': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
        '@typescript-eslint/triple-slash-reference': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
        '@typescript-eslint/type-annotation-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
        // takes too many times to analysis
        // '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unbound-method': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
        '@typescript-eslint/unified-signatures': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
        semi: 'off',
        '@typescript-eslint/semi': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
        '@typescript-eslint/prefer-regexp-exec': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
        '@typescript-eslint/no-floating-promises': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
        '@typescript-eslint/strict-boolean-expressions': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
        '@typescript-eslint/prefer-readonly': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/55eb0cfac20ccbc2e954083dd554dbcfcbed64fb/packages/eslint-plugin/docs/rules/return-await.md
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
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
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin//docs/rules/no-unnecessary-type-arguments.md
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin//docs/rules/brace-style.md
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': [
          'error',
          {
            before: true,
            after: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always'],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            allow: [],
            builtinGlobals: false,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
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
    // 上述部分规则与 prettier 存在冲突的，以 prettier 为准
    {
      files: ['**/*'],
      extends: ['prettier'],
    },
  ],
};
