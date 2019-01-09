import * as dayjs from 'dayjs';
import * as week from 'dayjs/plugin/weekOfYear';

import moment, { Moment } from '../../src';
import weekOfYear from '../../src/plugins/weekOfYear';

dayjs.extend(week)

Moment.extend(weekOfYear());

describe('weekOfYear', () => {
  it('works', () => {
    const t = '2018-08-08';
    expect(moment(t).weekOfYear()).toBe((dayjs(t) as any).week());
  });
});
