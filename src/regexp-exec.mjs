import { cloneRegexp, isRegExp } from './internal/regexp';
import { curry } from './internal/curry';

function regexpExec(re, str) {
  if (!isRegExp(re)) {
    throw new TypeError('regexpExec: the first argument can be a string or a regular expression');
  }

  if (typeof str !== 'string') {
    throw new TypeError('regexpExec: the second argument should be a string');
  }

  return {
    *[Symbol.iterator]() {
      if (typeof re === 'string') {
        re = new RegExp(re, 'g');
      }

      if (!re.sticky && !re.global) {
        re = cloneRegexp(re, { global: true });
      }
      let match;
      while ((match = re.exec(str)) !== null) {
        yield match;
      }
    },
  };
}

export default curry(regexpExec);
