import { $, $async, $await } from '../../../generate/async.macro.cjs';
import { $iterableCurry } from '../../internal/$iterable.js';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer.js';

$async;
export function* $__window(source, size) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  $await;
  for (const value of source) {
    buffer.push(value);
    if (buffer.isFull()) {
      yield bufferReadProxy;
    }
  }
}

export const $window = /*#__PURE__*/ $iterableCurry($__window, {
  validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error(`${$`window`} must be passed a numeric size`);
    }
  },
});
