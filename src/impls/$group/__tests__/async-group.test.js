/**
 * @generated-from ./$group.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncGroup } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap, asyncUnwrapDeep } from '../../../test/async-helpers.js';

describe('asyncGroup', () => {
  describe('when source is empty', () => {
    it('yields no groups', async () => {
      expect(await asyncUnwrapDeep(asyncGroup(null))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncGroup(undefined))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncGroup(asyncWrap([])))).toEqual([]);
    });
  });

  describe('when values from source cannot be grouped', () => {
    it('yields a group for each value', async () => {
      expect(await asyncUnwrapDeep(asyncGroup(asyncWrap([1, 2, 3])))).toEqual([
        [1, [1]],
        [2, [2]],
        [3, [3]],
      ]);
    });
  });

  describe('when source contains subsequent values belonging to the same group', () => {
    it('coalesces values into groups', async () => {
      expect(await asyncUnwrapDeep(asyncGroup('aaa'))).toEqual([['a', ['a', 'a', 'a']]]);
      expect(await asyncUnwrapDeep(asyncGroup('bbabb'))).toEqual([
        ['b', ['b', 'b']],
        ['a', ['a']],
        ['b', ['b', 'b']],
      ]);
    });
  });

  describe('when groups are consumed out of order', () => {
    it('throws', async () => {
      const iter = asyncGroup('AB');
      const [, As] = (await iter.next()).value;
      const [, Bs] = (await iter.next()).value;

      await asyncUnwrap(Bs);

      expect(
        await (async () => {
          try {
            await asyncUnwrap(As);
          } catch (e) {
            return e;
          }
        })(),
      ).toMatchSnapshot();
    });
  });
});
