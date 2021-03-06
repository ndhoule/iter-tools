/**
 * @generated-from ./$includes-any-seq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable } from '../../types/iterable';

declare function includesAnySeq(
  same: (a: any, b: any) => boolean,
  value: Array<Wrappable<any>>,
): (iterable: Wrappable<any>) => boolean;

declare function includesAnySeq(
  same: (a: any, b: any) => boolean,
  value: Array<Wrappable<any>>,
  iterable: Wrappable<any>,
): boolean;

declare function includesAnySeq(value: Array<Wrappable<any>>, iterable: Wrappable<any>): boolean;

export { includesAnySeq };
