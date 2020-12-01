/**
 * @generated-from ./$spliterate-grouped.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { spliterateGrouped } from 'iter-tools-es';
import { unwrapDeep } from '../../../test/helpers.js';

function* identityStrategy(_split: any, _options: any, source: any) {
  yield* source;
}

describe('spliterateGrouped', () => {
  let split: symbol;
  const testSpliterator = spliterateGrouped((split_: any, options: any, source: any) => {
    split = split_;
    return identityStrategy(split_, options, source);
  }, {});

  describe('when spliterator is empty', () => {
    it('yields no groups', () => {
      expect(unwrapDeep(testSpliterator([]))).toEqual([]);
    });
  });

  describe('when spliterator contains only a split', () => {
    it('yields two empty groups', () => {
      expect(unwrapDeep(testSpliterator([split, 'key']))).toEqual([['key', []]]);
    });
  });

  describe('when spliterator contains two splits', () => {
    it('yields three empty groups', () => {
      expect(unwrapDeep(testSpliterator([split, 'key1', split, 'key2']))).toEqual([
        ['key1', []],
        ['key2', []],
      ]);
    });
  });

  it('options may be omitted', () => {
    const testSpliterator = spliterateGrouped(identityStrategy);
    expect(unwrapDeep(testSpliterator([]))).toEqual([]);
  });
});
