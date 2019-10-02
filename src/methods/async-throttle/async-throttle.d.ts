import { AsyncSourceIterable, AsyncResultIterable } from '../../internal/async-iterable';

declare function asyncThrottle<T>(
  n: number,
): (iterable: AsyncSourceIterable<T>) => AsyncResultIterable<T>;

declare function asyncThrottle<T>(
  n: number,
  iterable: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;

export default asyncThrottle;
