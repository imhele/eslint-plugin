import type { Config } from 'stylelint';
import { rules as Recommended } from 'stylelint-config-recommended';
import { rules as Standard } from 'stylelint-config-standard';

const config: Config = {
  ignoreFiles: [
    '!**/*.{css,less,sass,scss}',
    '**/build/**',
    '**/dist/**',
    '**/node_modules/**',
    '**/release/**',
  ],
  rules: {
    ...Recommended,
    ...Standard,
    'block-no-empty': null,
    'number-max-precision': null,
    'rule-empty-line-before': null,
    'selector-class-pattern': '^[a-zA-Z0-9_-]*$',
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'local'] }],
  },
};

export = config;
