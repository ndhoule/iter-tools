/**
 * @generated-from ./$window-behind.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncWindowBehind } from 'iter-tools-es';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers.js';

describe('asyncWindowBehind', () => {
  describe('when source is empty', () => {
    it('yields no windows', async () => {
      expect(await asyncUnwrapDeep(asyncWindowBehind({ filler: 0 }, 3, null))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncWindowBehind({ filler: 0 }, 3, undefined))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncWindowBehind({ filler: 0 }, 3, asyncWrap([])))).toEqual([]);
    });
  });

  describe('when size(source) < size', () => {
    it('yields only partial windows', async () => {
      expect(await asyncUnwrapDeep(asyncWindowBehind({ filler: 0 }, 3, asyncWrap([1, 2])))).toEqual(
        [
          [0, 0, 1],
          [0, 1, 2],
        ],
      );
    });
  });

  describe('when size(source) === size', () => {
    it('yields partial windows, then one full window', async () => {
      expect(
        await asyncUnwrapDeep(asyncWindowBehind({ filler: 0 }, 3, asyncWrap([1, 2, 3]))),
      ).toEqual([
        [0, 0, 1],
        [0, 1, 2],
        [1, 2, 3],
      ]);
    });
  });

  describe('when size(source) > size', () => {
    it('yields partial windows, then size(source)-size full windows', async () => {
      expect(
        await asyncUnwrapDeep(asyncWindowBehind({ filler: 0 }, 2, asyncWrap([1, 2, 3]))),
      ).toEqual([
        [0, 1],
        [1, 2],
        [2, 3],
      ]);
    });
  });

  it('has a default filler of undefined', async () => {
    expect(await asyncUnwrapDeep(asyncWindowBehind(2, asyncWrap([1])))).toEqual([[undefined, 1]]);
  });

  describe('when arguments are invalid', () => {
    it('throws', async () => {
      expect(() =>
        asyncWindowBehind('foo' as any, asyncWrap([1, 2, 3])),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
