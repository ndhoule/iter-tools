/**
 * @generated-from ./$str.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { str } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('str', () => {
  it('joins an iterable of strings into a single string', () => {
    expect(str(wrap(['1', '2', '3']))).toEqual('123');
  });

  it('coerces non-strings into strings', () => {
    expect(str(wrap([1, 2, 3]))).toEqual('123');
  });
});