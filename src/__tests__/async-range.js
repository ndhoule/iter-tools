/**
 * @generated-from ./$range.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncWrap } from './__framework__/async-wrap';

async function* genRange(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

export function asyncRange(start, end, step) {
  return asyncWrap(genRange(start, end, step));
}
