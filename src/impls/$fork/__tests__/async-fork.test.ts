/**
 * @generated-from ./$fork.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncFork, asyncMap } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncFork', () => {
  const asyncMakeIterable = async function* _asyncMakeIterable() {
    yield 1;
    yield 2;
    yield 3;
  };

  it('creates an iterable of iterables with the same values as its source', async () => {
    const [a, b, c] = asyncFork(asyncMakeIterable());
    const originalIter = await asyncUnwrap(asyncMakeIterable());

    expect(await asyncUnwrap(asyncMap((iter) => asyncUnwrap(iter), [a, b, c]))).toEqual(
      Array(3).fill(originalIter),
    );
  });

  it('does not matter which order the fork iterables are consumed in', async () => {
    const [a, b, c] = asyncFork(asyncMakeIterable());
    const originalIter = await asyncUnwrap(asyncMakeIterable());
    expect(await asyncUnwrap(asyncMap((iter) => asyncUnwrap(iter), [c, b, a]))).toEqual(
      Array(3).fill(originalIter),
    );
  });

  describe('source iterable cleanup', () => {
    /* eslint-disable jest/expect-expect */
    it('happens when a fork is exhausted', async () => {
      const iterableIterator = asyncFork(asyncWrap([1, 2, 3]))[Symbol.iterator]();
      await asyncUnwrap(iterableIterator.next().value);
    });

    it('happens when fork is exhausted and then all forks are exhausted', async () => {
      const [a, b] = asyncFork(asyncWrap([1, 2, 3]));
      await a[Symbol.asyncIterator]().next();
      await a.return();
      await b[Symbol.asyncIterator]().next();
      await b.return();
    });

    it('happens when all forks are exhausted then fork is exhausted', async () => {
      const iterableIterator = asyncFork(asyncWrap([1, 2, 3]))[Symbol.iterator]();

      const a = iterableIterator.next().value;
      await a[Symbol.asyncIterator]().next();
      await a.return();

      const b = iterableIterator.next().value;
      await b[Symbol.asyncIterator]().next();
      await b.return();

      iterableIterator.return();
    });

    it('happens even when a fork is closed without being used', async () => {
      const [a, b] = asyncFork(asyncWrap([1, 2, 3]));
      await a.return();
      await b.return();
    });

    /* eslint-enable jest/expect-expect */
  });
});
