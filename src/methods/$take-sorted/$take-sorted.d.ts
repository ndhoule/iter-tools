import { $SourceIterable, $ResultIterable } from '../../internal/$iterable';

declare function $takeSorted<T = any>(iterable: $SourceIterable<T>): $ResultIterable<T>;

declare function $takeSorted<T = any>(
  n: number,
): (iterable: $SourceIterable<T>) => $ResultIterable<T>;

declare function $takeSorted<T = any>(
  func: (a: T, b: T) => number,
  n: number,
): (iterable: $SourceIterable<T>) => $ResultIterable<T>;

declare function $takeSorted<T = any>(n: number, iterable: $SourceIterable<T>): $ResultIterable<T>;

declare function $takeSorted<T = any>(
  func: (a: T, b: T) => number,
  n: number,
  iterable: $SourceIterable<T>,
): $ResultIterable<T>;

export default $takeSorted;
