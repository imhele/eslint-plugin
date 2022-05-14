#!/usr/bin/env node
// @ts-check

import { exec, glob1st } from './_util.mjs';

exec`
  eslint
    --cache
    --config ${glob1st('{.,}eslintrc*')}
    --ext .ts,.tsx,.mts,.mtsx,.cts,.ctsx,.js,.jsx,.mjs,.mjsx,.cjs,.cjsx
    --format visualstudio
`;
