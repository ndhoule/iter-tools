/**
 * @generated-from ./array-last.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { arrayLast } from 'iter-tools-es';

describe('arrayLast', () => {
  describe('when there is no array', () => {
    it('returns undefined', () => {
      expect(arrayLast()).toBe(undefined);
    });
  });

  describe('when the array is empty', () => {
    it('returns undefined', () => {
      expect(arrayLast([])).toBe(undefined);
    });
  });

  describe('when the array is not empty', () => {
    it('returns the last value', () => {
      expect(arrayLast([1, 2, 3])).toBe(3);
    });
  });
});
