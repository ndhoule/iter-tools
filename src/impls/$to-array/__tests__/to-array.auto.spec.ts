/**
 * @generated-from ./to-array.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { toArray } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('toArray', () => {
  it('turns an iterable into an array', () => {
    expect(toArray(wrap([1, 2, 3]))).toEqual([1, 2, 3]);
  });
});
