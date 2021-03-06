/**
 * @generated-from ./$batch.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';
import { __spliterate } from '../$spliterate/spliterate.js';

function* batchSpliterator(split, { size }, source) {
  let i = 0;
  for (const value of source) {
    if (i === size) {
      yield split;
      i = 0;
    }
    yield value;
    i++;
  }
}

export function __batch(source, size) {
  return __spliterate(source, batchSpliterator, { size });
}

export const batch = /*#__PURE__*/ iterableCurry(__batch, {
  validateArgs(args) {
    if (typeof args[1] !== 'number' || args[1] < 1) {
      throw new TypeError('batch size should be a number greater than zero');
    }
  },
});
