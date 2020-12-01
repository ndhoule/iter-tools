/**
 * @generated-from ./take-while.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { takeWhile } from 'iter-tools-es';
import { wrap, unwrap } from '../../../test/helpers.js';

describe('takeWhile', () => {
  describe('when source is empty', () => {
    it('yields no values', () => {
      expect(unwrap(takeWhile((value: any) => value, null))).toEqual([]);
      expect(unwrap(takeWhile((value: any) => value, undefined))).toEqual([]);
      expect(unwrap(takeWhile((value: any) => value, wrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('yields values while the result of predicate(value, i) is truthy', () => {
      expect(unwrap(takeWhile((value) => value === 2, wrap([2, 2, 3, 2])))).toEqual([2, 2]);
      expect(unwrap(takeWhile((_value, i) => i < 0, wrap([2, 2])))).toEqual([]);
    });
  });
});
