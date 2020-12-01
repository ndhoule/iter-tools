/**
 * @generated-from ./not-async-loopable.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { notAsyncLoopable } from 'iter-tools-es';

describe('notAsyncLoopable', () => {
  describe('when value can be used with a `for await..of` loop', () => {
    it('returns false', () => {
      expect(notAsyncLoopable((async function* () {})())).toBe(false);
      expect(notAsyncLoopable((function* () {})())).toBe(false);
      expect(notAsyncLoopable([])).toBe(false);
    });
  });

  describe('when value cannot be used with a `for await..of` loop', () => {
    it('returns true', () => {
      expect(notAsyncLoopable({})).toBe(true);
      expect(notAsyncLoopable(undefined)).toBe(true);
      expect(notAsyncLoopable(null)).toBe(true);
    });
  });
});