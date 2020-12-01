/**
 * @generated-from ./$join.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { join } from 'iter-tools-es';
import { wrapDeep, unwrap } from '../../../test/helpers.js';

describe('join', () => {
  it('should join each group with the provided value', () => {
    expect(unwrap(join(wrapDeep([[1], [2], [3]])))).toEqual([1, 2, 3]);
  });

  it('should have two adjacent separators when encountering an empty group', () => {
    expect(unwrap(join(wrapDeep([[1], [], [3]])))).toEqual([1, 3]);
  });

  it('should yield a single separator when joining two empty groups', () => {
    expect(unwrap(join(wrapDeep([[], []])))).toEqual([]);
  });

  it('passes through the empty iterable', () => {
    expect(unwrap(join(null))).toEqual([]);
    expect(unwrap(join(undefined))).toEqual([]);
    expect(unwrap(join(wrapDeep([])))).toEqual([]);
  });

  it('passes through the empty string', () => {
    expect(unwrap(join(''))).toEqual([]);
  });

  describe('given a string', () => {
    it('should split on every value which is equal to the on argument', () => {
      expect(unwrap(join(['11', '22', '33']))).toEqual(['1', '1', '2', '2', '3', '3']);
    });
  });
});
