#!/usr/bin/env node
// @ts-check

import { exec, glob1st } from './_util.mjs';

exec`
  stylelint
    --allow-empty-input
    --cache
    --config ${glob1st('{.,}stylelintrc*')}
`;
