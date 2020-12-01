/**
 * @generated-from ./$split-with.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncSplitWith } from 'iter-tools-es';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers.js';

describe('asyncSplitWith', () => {
  it('should split between every value which is equal to the on argument', async () => {
    expect(
      await asyncUnwrapDeep(asyncSplitWith((i) => i === null, asyncWrap([1, null, 2, null, 3]))),
    ).toEqual([[1], [2], [3]]);
  });

  it('should return no parts if source is empty', async () => {
    expect(await asyncUnwrapDeep(asyncSplitWith((i) => i, null))).toEqual([]);
  });
});
