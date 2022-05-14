#!/usr/bin/env node
// @ts-check

import del from 'del';

del.sync(process.argv.slice(2));
