import { ResultIterable } from '../../internal/iterable';

declare function values<T = any>(obj: { [id: string]: T } | null | undefined): ResultIterable<T>;

export default values;
