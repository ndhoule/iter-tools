import assert from 'static-type-assert';

import { $Iterable, $ResultIterable } from '../../../internal/$iterable';
import { $flat } from '../../..';

declare const Ø: never;

// asyncFlat(iterable)
assert<{
  'depth = 0': $ResultIterable<0 | 1 | 2>;
  'depth = 1': $ResultIterable<0 | 1 | 2 | 3>;
  'depth = 2': $ResultIterable<0 | 1 | [2]>;
}>({
  'depth = 0': $flat(Ø as [0, 1, 2]),
  'depth = 1': $flat(Ø as [0, [1], [2, 3]]),
  'depth = 2': $flat(Ø as [0, [1], [[2]]]),
});

// asyncFlat(0, iterable)
assert<{
  'depth = 0': $ResultIterable<0 | 1 | 2>;
  'depth = 1': $ResultIterable<0 | [1] | [2, 3]>;
  'depth = 2': $ResultIterable<0 | [1] | [[2]]>;
}>({
  'depth = 0': $flat(0, Ø as [0, 1, 2]),
  'depth = 1': $flat(0, Ø as [0, [1], [2, 3]]),
  'depth = 2': $flat(0, Ø as [0, [1], [[2]]]),
});

// asyncFlat(1, iterable)
assert<{
  'depth = 0': $ResultIterable<0 | 1 | 2>;
  'depth = 1': $ResultIterable<0 | 1 | 2 | 3>;
  'depth = 2': $ResultIterable<0 | 1 | [2]>;
}>({
  'depth = 0': $flat(1, Ø as [0, 1, 2]),
  'depth = 1': $flat(1, Ø as [0, [1], [2, 3]]),
  'depth = 2': $flat(1, Ø as [0, [1], [[2]]]),
});

// asyncFlat(n, iterable)
assert<{
  'depth = 0': $ResultIterable<any>;
  'depth = 1': $ResultIterable<any>;
  'depth = 2': $ResultIterable<any>;
}>({
  'depth = 0': $flat(Ø as number, Ø as [0, 1, 2]),
  'depth = 1': $flat(Ø as number, Ø as [0, [1], [2, 3]]),
  'depth = 2': $flat(Ø as number, Ø as [0, [1], [[2]]]),
});

// asyncFlat(0)(iterable)
assert<{
  'depth = 0': $ResultIterable<0 | 1 | 2>;
  'depth = 1': $ResultIterable<0 | [1] | [2, 3]>;
  'depth = 2': $ResultIterable<0 | [1] | [[2]]>;
}>({
  'depth = 0': $flat(0)(Ø as [0, 1, 2]),
  'depth = 1': $flat(0)(Ø as [0, [1], [2, 3]]),
  'depth = 2': $flat(0)(Ø as [0, [1], [[2]]]),
});

// asyncFlat(1)(iterable)
assert<{
  'depth = 0': $ResultIterable<0 | 1 | 2>;
  'depth = 1': $ResultIterable<0 | 1 | 2 | 3>;
  'depth = 2': $ResultIterable<0 | 1 | [2]>;
}>({
  'depth = 0': $flat(1)(Ø as [0, 1, 2]),
  'depth = 1': $flat(1)(Ø as [0, [1], [2, 3]]),
  'depth = 2': $flat(1)(Ø as [0, [1], [[2]]]),
});

// asyncFlat(n)(iterable)
assert<{
  'depth = 0': $ResultIterable<any>;
  'depth = 1': $ResultIterable<any>;
  'depth = 2': $ResultIterable<any>;
}>({
  'depth = 0': $flat(Ø as number)(Ø as [0, 1, 2]),
  'depth = 1': $flat(Ø as number)(Ø as [0, [1], [2, 3]]),
  'depth = 2': $flat(Ø as number)(Ø as [0, [1], [[2]]]),
});

// prettier-ignore
assert<$ResultIterable<number>>($flat(0, Ø as $Iterable<number>));
// prettier-ignore
assert<$ResultIterable<number>>($flat(1, Ø as $Iterable<$Iterable<number>>));
// prettier-ignore
assert<$ResultIterable<number>>($flat(2, Ø as $Iterable<$Iterable<$Iterable<number>>>));
// prettier-ignore
assert<$ResultIterable<number>>($flat(3, Ø as $Iterable<$Iterable<$Iterable<$Iterable<number>>>>));
// prettier-ignore
assert<$ResultIterable<number>>($flat(4, Ø as $Iterable<$Iterable<$Iterable<$Iterable<$Iterable<number>>>>>));
// prettier-ignore
assert<$ResultIterable<number>>($flat(5, Ø as $Iterable<$Iterable<$Iterable<$Iterable<$Iterable<$Iterable<number>>>>>>));
// prettier-ignore
assert<$ResultIterable<number>>($flat(6, Ø as $Iterable<$Iterable<$Iterable<$Iterable<$Iterable<$Iterable<$Iterable<number>>>>>>>));
// prettier-ignore
assert<$ResultIterable<number>>($flat(7, Ø as $Iterable<$Iterable<$Iterable<$Iterable<$Iterable<$Iterable<$Iterable<$Iterable<number>>>>>>>>));
