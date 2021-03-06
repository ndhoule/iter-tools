/**
 * @generated-from ./$take-while.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';

export function* __takeWhile(source, predicate) {
  let take = true;
  let c = 0;

  for (const value of source) {
    take = predicate(value, c++);
    if (take) {
      yield value;
    } else {
      break;
    }
  }
}

export const takeWhile = /*#__PURE__*/ iterableCurry(__takeWhile);
