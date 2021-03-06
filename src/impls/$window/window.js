/**
 * @generated-from ./$window.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer.js';

export function* __window(source, size) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  for (const value of source) {
    buffer.push(value);
    if (buffer.isFull()) {
      yield bufferReadProxy;
    }
  }
}

export const window = /*#__PURE__*/ iterableCurry(__window, {
  validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error(`${'window'} must be passed a numeric size`);
    }
  },
});
