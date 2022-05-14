// @ts-check

import { spawn } from 'child_process';
import { globbySync } from 'globby';

/**
 * @param {readonly [TemplateStringsArray, ...unknown[]]} templates
 * @returns {void}
 */
export function exec(...templates) {
  const [fragments] = templates;

  const [cmd, ...args] = fragments
    .map((fragment, index) => (index ? `${templates[index]}${fragment}` : fragment))
    .join('')
    .trim()
    .split(/\s+/);

  spawn(cmd, args.concat(process.argv.slice(2)), { stdio: 'inherit' }).once('exit', code => {
    // eslint-disable-next-line no-process-exit
    process.exit(code);
  });
}

/**
 *
 * @param {string} ptn
 */
export function glob1st(ptn) {
  return globbySync(ptn)[0];
}

/**
 *
 * @param {string} ptn
 */
export function globDir(ptn) {
  return globbySync(ptn, { expandDirectories: false, onlyDirectories: true });
}
