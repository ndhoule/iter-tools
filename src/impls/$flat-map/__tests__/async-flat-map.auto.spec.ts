/**
 * @generated-from ./async-flat-map.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncFlatMap } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncFlatMap', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      expect(await asyncUnwrap(asyncFlatMap((value: any) => value, null))).toEqual([]);
      expect(await asyncUnwrap(asyncFlatMap((value: any) => value, undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncFlatMap((value: any) => value, asyncWrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('concatenates result of func(value, i) for each value in source', async () => {
      const iter = asyncFlatMap((value: number, i: number) => [i, value], asyncWrap([1, 2, 3]));
      expect(await asyncUnwrap(iter)).toEqual([0, 1, 1, 2, 2, 3]);
    });
  });
});
