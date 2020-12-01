/**
 * @generated-from ./$append.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncAppend<T, V>(
  value: V,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<V | T>;

declare function asyncAppend<V>(
  value: V,
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<V | T>;

export default asyncAppend;