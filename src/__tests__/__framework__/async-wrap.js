/**
 * @generated-from ./$wrap.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

const wrappedIterables = [];

class AsyncWrappedIterable {
  constructor(source) {
    this.source = source;
    this.done = false;
    this.started = false;
    this.returned = false;
  }

  async next() {
    this.started = true;
    const item = await this.source.next();
    if (item.done) this.done = true;
    return item;
  }

  async return(value) {
    if (this.done) {
      throw new Error('Called return on an iterator that was done');
    }

    this.done = true;
    this.returned = true;
    return {
      value,
      done: true,
    };
  }

  [Symbol.asyncIterator]() {
    return this;
  }
}

export function asyncWrap(iterable) {
  const getIterator = iterable[Symbol.asyncIterator] || iterable[Symbol.iterator];
  const wrapped = new AsyncWrappedIterable(getIterator.call(iterable));
  wrappedIterables.push(wrapped);
  return wrapped;
}
beforeEach(() => {
  wrappedIterables.length = 0;
});
afterEach(() => {
  for (const wrapped of wrappedIterables) {
    if (wrapped.started && !(wrapped.done || wrapped.returned)) {
      throw new Error('Not all iterables returned');
    }
  }
});
