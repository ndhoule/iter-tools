/**
 * @generated-from ./$split-on-seq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable, IterableIterator } from '../../types/iterable';

declare function splitOnSeq(
  same: (a: any, b: any) => boolean,
  separatorSeq: Wrappable<any>,
): <T>(source: Wrappable<T>) => IterableIterator<IterableIterator<T>>;

declare function splitOnSeq<T>(
  same: (a: any, b: any) => boolean,
  separatorSeq: Wrappable<any>,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

declare function splitOnSeq<T>(
  separatorSeq: Wrappable<any>,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

export { splitOnSeq };
