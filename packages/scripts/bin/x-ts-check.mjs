#!/usr/bin/env node
// @ts-check

import { exec } from './_util.mjs';

exec`
  tsc
    --noEmit
    --project tsconfig.json
`;
