import { $, $async, $await } from '../../../../generate/async.macro.cjs';

import { $firstOr } from 'iter-tools-es';
import { $wrap } from '../../../test/$helpers.js';

describe($`firstOr`, () => {
  describe('when iterable is empty', () => {
    it(
      'returns whenEmpty',
      $async(() => {
        expect($await($firstOr(0, null))).toBe(0);
        expect($await($firstOr(0, undefined))).toBe(0);
        expect($await($firstOr(0, $wrap([])))).toBe(0);
      }),
    );
  });

  describe('when iterable has values', () => {
    it(
      'returns first value',
      $async(() => {
        expect($await($firstOr(null, $wrap([1, 2, 3])))).toBe(1);
      }),
    );
  });
});
