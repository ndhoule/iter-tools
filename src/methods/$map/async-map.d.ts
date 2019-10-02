/**
 * @generated-from ./$map.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../internal/async-iterable';
declare function asyncMap<O, T = any>(
  func: (item: T) => O | Promise<O>,
): (iterable: AsyncSourceIterable<T>) => AsyncResultIterable<O>;
declare function asyncMap<O, T = any>(
  func: (item: T) => O | Promise<O>,
  iterable: AsyncSourceIterable<T>,
): AsyncResultIterable<O>;
export default asyncMap;
