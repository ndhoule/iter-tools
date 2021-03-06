type WhenValue<T> = (() => T) | T;

declare function when(
  condition: any,
  value: null | undefined,
): Record<string, never> & Array<never>;

declare function when<T extends Iterable<any>>(condition: any, value: WhenValue<T>): T | [];

declare function when<T extends Record<string, any>>(
  condition: any,
  value: WhenValue<T>,
): T | Record<string, never>;

export { when };
