/**
 * @generated-from ./$to-object.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { toObject } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('toObject', () => {
  describe('when iterable is empty', () => {
    it('returns an empty object', () => {
      expect(toObject(null)).toEqual({});
      expect(toObject(undefined)).toEqual({});
      expect(toObject(wrap([]))).toEqual({});
    });
  });

  describe('given an iterable of entries', () => {
    it('returns the object with those entries', () => {
      const entries: Array<[string, string]> = [
        ['foo', 'fox'],
        ['bar', 'box'],
        ['baz', 'rox'],
      ];
      expect(toObject(wrap(entries))).toEqual({
        foo: 'fox',
        bar: 'box',
        baz: 'rox',
      });
    });
  });

  it('can take a prototype to pass to Object.create', () => {
    expect(Object.getPrototypeOf(toObject(wrap([]), null))).toEqual(null);
  });
});
