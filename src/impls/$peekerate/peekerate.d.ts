/**
 * @generated-from ./$peekerate.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable, IteratorResult, NonIterableIterator } from '../../types/iterable';

export interface PeekeratorIterator<T> {
  next(): IteratorResult<T>;
  return(): IteratorResult<T>;
  [Symbol.iterator](): NonIterableIterator<T>;
}

interface PeekeratorBase<T> {
  readonly index: number;

  /* eslint-disable no-use-before-define */
  advance(): Peekerator<T>;
  return(): Peekerator<T>;
  /* eslint-enaable no-use-before-define */
  asIterator(): PeekeratorIterator<T>;
}

interface DonePeekerator<T> extends PeekeratorBase<T> {
  readonly current: { done: true; value: undefined };
  readonly done: true;
  readonly value: undefined;
}

interface ValuePeekerator<T> extends PeekeratorBase<T> {
  readonly current: { done: false; value: T };
  readonly done: false;
  readonly value: T;
}

export type Peekerator<T> = DonePeekerator<T> | ValuePeekerator<T>;

declare function peekerate<T>(source: Wrappable<T>): Peekerator<T>;

export { peekerate };
