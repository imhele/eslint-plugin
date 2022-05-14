import type { Config } from 'stylelint';
import * as core from './core.cjs';

const config: Config = {
  ...core,
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'no-descending-specificity': null,
      },
    },
  ],
};

export = config;
