/**
 * @generated-from ./$find.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncFindOr } from '../$find-or/async-find-or.js';

export function __asyncFind(iterable, predicate) {
  return __asyncFindOr(iterable, undefined, predicate);
}

export const asyncFind = /*#__PURE__*/ asyncIterableCurry(__asyncFind, {
  reduces: true,
});
