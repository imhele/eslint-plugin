import type { Config } from 'stylelint';
import core from './core.cjs';

const config: Config = {
  ...core,
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
      },
    },
  ],
};

export = config;
