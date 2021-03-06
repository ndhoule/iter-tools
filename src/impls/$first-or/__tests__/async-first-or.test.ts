/**
 * @generated-from ./$first-or.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncFirstOr } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncFirstOr', () => {
  describe('when iterable is empty', () => {
    it('returns whenEmpty', async () => {
      expect(await asyncFirstOr(0, null)).toBe(0);
      expect(await asyncFirstOr(0, undefined)).toBe(0);
      expect(await asyncFirstOr(0, asyncWrap([]))).toBe(0);
    });
  });

  describe('when iterable has values', () => {
    it('returns first value', async () => {
      expect(await asyncFirstOr(null, asyncWrap([1, 2, 3]))).toBe(1);
    });
  });
});
