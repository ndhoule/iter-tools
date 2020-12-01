/**
 * @generated-from ./async-round-robin.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncRoundRobin } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncRoundRobin', () => {
  it('starts at 0 with step 1 if given no config arguments', async () => {
    const iter = asyncRoundRobin(asyncWrap([1, 4, 7]), asyncWrap([2, 5, 8]), asyncWrap([3, 6, 9]));
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have a configurable step', async () => {
    const iter = asyncRoundRobin(
      2,
      asyncWrap([1, 4, 7]),
      asyncWrap([3, 6, 9]),
      asyncWrap([2, 5, 8]),
    );
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have a configurable start and step', async () => {
    const iter = asyncRoundRobin(
      1,
      2,
      asyncWrap([2, 5, 8]),
      asyncWrap([1, 4, 7]),
      asyncWrap([3, 6, 9]),
    );
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have start and step specified in a config object', async () => {
    const iter = asyncRoundRobin(
      { start: 1, step: 1 },
      asyncWrap([3, 6, 9]),
      asyncWrap([1, 4, 7]),
      asyncWrap([2, 5, 8]),
    );
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('works with input iterables of different lengths', async () => {
    const iter = asyncRoundRobin(asyncWrap([]), asyncWrap([1, 3]), asyncWrap([2]));
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3]);
  });

  describe('when step is invalid', () => {
    it('throws', async () => {
      expect(() => asyncRoundRobin({ step: 0 }, asyncWrap([]))).toThrowErrorMatchingSnapshot();
    });
  });
});