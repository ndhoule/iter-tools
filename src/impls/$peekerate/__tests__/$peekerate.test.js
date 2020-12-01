import { $, $async, $await } from '../../../../generate/async.macro.cjs';

import { $peekerate } from 'iter-tools-es';
import { $wrap } from '../../../test/$helpers.js';

describe($`peekerate`, () => {
  it(
    'decorates iterator with the current value in the iterable',
    $async(() => {
      const peekerator = $await($peekerate($wrap([1, 2, 3])));
      const observed = [];

      while (!peekerator.done) {
        const { current, done, value } = peekerator;
        observed.push({ current, done, value });
        $await(peekerator.advance());
      }

      expect(observed).toEqual([
        {
          current: {
            done: false,
            value: 1,
          },
          done: false,
          value: 1,
        },
        {
          current: {
            done: false,
            value: 2,
          },
          done: false,
          value: 2,
        },
        {
          current: {
            done: false,
            value: 3,
          },
          done: false,
          value: 3,
        },
      ]);
    }),
  );
});
