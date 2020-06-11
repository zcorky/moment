import * as wmoment from 'moment';
import moment, { Moment } from '../src';

Moment.use({
  install(M: any) {
    const proto = (M as any).prototype;
    proto.today = function () {
      return this;
    }
  },
});

describe('plugin design', () => {
  it('extend', () => {
    expect((moment() as any).today().format('YYYY-MM-DD')).toBe(wmoment().format('YYYY-MM-DD'));
  });
});
