/**
 * @generated-from ./$split.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncSplit } from 'iter-tools-es';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers.js';

describe('asyncSplit', () => {
  it('should yield an iterable for every value in the iterable', async () => {
    expect(await asyncUnwrapDeep(asyncSplit(asyncWrap([1, 2, 3])))).toEqual([[1], [2], [3]]);
  });
});
