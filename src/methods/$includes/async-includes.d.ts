/**
 * @generated-from ./$includes.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable } from '../../internal/async-iterable';
declare function asyncIncludes(
  value: any,
): (iterable: AsyncSourceIterable<any>) => Promise<boolean>;
declare function asyncIncludes(value: any, iterable: AsyncSourceIterable<any>): Promise<boolean>;
export default asyncIncludes;
