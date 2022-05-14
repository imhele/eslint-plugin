import type { Config } from 'prettier';
import PrettierPluginPackageJSON from 'prettier-plugin-packagejson';

const config: Config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  overrides: [
    {
      files: '**/package.json',
      options: { plugins: [PrettierPluginPackageJSON] },
    },
    {
      files: ['*.code-workspace'],
      options: { parser: 'json' },
    },
  ],
};

export = config;
