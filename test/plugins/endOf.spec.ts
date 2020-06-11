import * as momentjs from 'moment';
import moment, { Moment } from '../../src';
import endOf from '../../src/plugins/endOf';

Moment.use(endOf());

describe('endOf*', () => {
  it('day', () => {
    expect(moment().endOfDay().valueOf()).toBe(moment().endOf('day').valueOf());
    expect(moment().endOfDay().valueOf()).toBe(momentjs().endOf('day').valueOf());
  });

  it('week', () => {
    expect(moment().endOfWeek().valueOf()).toBe(moment().endOf('week').valueOf());
    expect(moment().endOfWeek().valueOf()).toBe(momentjs().endOf('week').valueOf());
  });

  it('month', () => {
    expect(moment().endOfMonth().valueOf()).toBe(moment().endOf('month').valueOf());
    expect(moment().endOfMonth().valueOf()).toBe(momentjs().endOf('month').valueOf());
  });

  it('year', () => {
    expect(moment().endOfYear().valueOf()).toBe(moment().endOf('year').valueOf());
    expect(moment().endOfYear().valueOf()).toBe(momentjs().endOf('year').valueOf());
  });

  it('hour', () => {
    expect(moment().endOfHour().valueOf()).toBe(moment().endOf('hour').valueOf());
    expect(moment().endOfHour().valueOf()).toBe(momentjs().endOf('hour').valueOf());
  });

  it('minute', () => {
    expect(moment().endOfMinute().valueOf()).toBe(moment().endOf('minute').valueOf());
    expect(moment().endOfMinute().valueOf()).toBe(momentjs().endOf('minute').valueOf());
  });

  it('second', () => {
    const now = new Date();
    expect(moment(now).endOfSecond().valueOf()).toBe(moment(now).endOf('second').valueOf());
    expect(moment(now).endOfSecond().valueOf()).toBe(momentjs(now).endOf('second').valueOf());
  });
});
