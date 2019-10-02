/**
 * @generated-from ./$collate.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* tslint:disable unified-signatures */
import { AsyncSourceIterable, AsyncResultIterable } from "../../internal/async-iterable"; // prettier-ignore

declare function asyncCollate<T = any>(
  ...iterables: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;
declare function asyncCollate<T = any>(
  step: number,
  ...iterables: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;
declare function asyncCollate<T = any>(
  start: number,
  step: number,
  ...iterables: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;
declare function asyncCollate<T = any>(
  comparator: (a: T, b: T) => number,
  ...iterables: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;
declare function asyncCollate<T = any>(
  options: {
    start?: number;
    step?: number;
  },
  ...iterables: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;
export default asyncCollate;
