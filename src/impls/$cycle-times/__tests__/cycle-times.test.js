/**
 * @generated-from ./$cycle-times.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { cycleTimes } from 'iter-tools-es';
import { wrap, unwrap } from '../../../test/helpers.js';

describe('cycleTimes', () => {
  describe('when source is empty', () => {
    it('yields no values', () => {
      expect(unwrap(cycleTimes(1, null))).toEqual([]);
      expect(unwrap(cycleTimes(1, undefined))).toEqual([]);
      expect(unwrap(cycleTimes(1, []))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('yields those values repeating n times', () => {
      expect(unwrap(cycleTimes(2, wrap([1, 2, 3])))).toEqual([1, 2, 3, 1, 2, 3]);
    });
  });

  it('can produce multiple iterators', () => {
    const myCycle = cycleTimes(2, wrap([1, 2, 3]));
    expect(unwrap(myCycle)).toEqual([1, 2, 3, 1, 2, 3]);
    expect(unwrap(myCycle)).toEqual([1, 2, 3, 1, 2, 3]);
  });
});
