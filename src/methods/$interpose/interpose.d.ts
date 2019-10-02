/**
 * @generated-from ./$interpose.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable, ResultIterable } from '../../internal/iterable';
declare function interpose<I>(
  interposeItem: I,
): <T = any>(iterable: SourceIterable<T>) => ResultIterable<T | I>;
declare function interpose<I, T = any>(
  interposeItem: I,
  iterable: SourceIterable<T>,
): ResultIterable<T | I>;
export default interpose;
