/**
 * @generated-from ./$to-array.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable } from '../../internal/async-iterable';
declare function asyncToArray<T>(iterable: AsyncSourceIterable<T>): T[] | Promise<T[]>;
export default asyncToArray;
