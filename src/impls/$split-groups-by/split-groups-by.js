/**
 * @generated-from ./$split-groups-by.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';
import { __spliterateGrouped } from '../$spliterate-grouped/spliterate-grouped.js';
import { __peekerate } from '../$peekerate/peekerate.js';

const initialKey = Symbol('initial group key');

function* groupingSpliterator(split, { getKey }, source) {
  const peekr = __peekerate(source);
  let key = initialKey;
  let idx = 0;

  while (!peekr.done) {
    const lastKey = key;

    key = getKey(peekr.value, idx++);

    if (lastKey !== key) {
      yield split;
      yield key;
    }

    yield peekr.value;

    peekr.advance();
  }
}

export function __splitGroupsBy(source, getKey) {
  return __spliterateGrouped(source, groupingSpliterator, { getKey });
}

export const splitGroupsBy = /*#__PURE__*/ iterableCurry(__splitGroupsBy);