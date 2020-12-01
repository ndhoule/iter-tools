/**
 * @generated-from ./$split-on.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncSplitOn } from 'iter-tools-es';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers.js';

describe('asyncSplitOn', () => {
  it('should split between every value which is equal to the on argument', async () => {
    expect(await asyncUnwrapDeep(asyncSplitOn(null, asyncWrap([1, null, 2, null, 3])))).toEqual([
      [1],
      [2],
      [3],
    ]);
  });

  it('should throw when splits are consumed out of order', async () => {
    const parts = asyncSplitOn(null, asyncWrap([1, null, 2]));
    const a = (await parts.next()).value;
    const b = (await parts.next()).value;

    expect(
      await (async () => {
        try {
          await asyncUnwrapDeep([b, a]);
        } catch (e) {
          return e;
        }
      })(),
    ).toMatchSnapshot();
  });

  it('should yield [] between two separators', async () => {
    expect(await asyncUnwrapDeep(asyncSplitOn(null, asyncWrap([1, null, null, 3])))).toEqual([
      [1],
      [],
      [3],
    ]);
  });

  it('should yield [], [] when only separator', async () => {
    expect(await asyncUnwrapDeep(asyncSplitOn(null, asyncWrap([null])))).toEqual([[], []]);
  });

  it('passes through the empty iterable', async () => {
    expect(await asyncUnwrapDeep(asyncSplitOn(0, null))).toEqual([]);
  });
});
