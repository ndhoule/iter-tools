/**
 * @generated-from ./$starts-with-any-subseq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable } from '../../internal/iterable';
import { SourceIterable as SyncSourceIterable } from '../../internal/iterable';
declare function startsWithAnySubseq(
  subseqs: SyncSourceIterable<SourceIterable<any>>,
): (iterable: SourceIterable<any>) => boolean;
declare function startsWithAnySubseq(
  subseqs: SyncSourceIterable<SourceIterable<any>>,
  iterable: SourceIterable<any>,
): boolean;
export default startsWithAnySubseq;
