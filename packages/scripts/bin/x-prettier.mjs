#!/usr/bin/env node
// @ts-check

import { exec } from './_util.mjs';

exec`
  prettier
    --ignore-path .gitignore
`;
