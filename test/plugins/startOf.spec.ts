import * as momentjs from 'moment';
import moment, { Moment } from '../../src';
import startOf from '../../src/plugins/startOf';

Moment.extend(startOf());

describe('startOf*', () => {
  it('day', () => {
    expect(moment().startOfDay().valueOf()).toBe(moment().startOf('day').valueOf());
    expect(moment().startOfDay().valueOf()).toBe(momentjs().startOf('day').valueOf());
  });

  it('week', () => {
    expect(moment().startOfWeek().valueOf()).toBe(moment().startOf('week').valueOf());
    expect(moment().startOfWeek().valueOf()).toBe(momentjs().startOf('week').valueOf());
  });

  it('month', () => {
    expect(moment().startOfMonth().valueOf()).toBe(moment().startOf('month').valueOf());
    expect(moment().startOfMonth().valueOf()).toBe(momentjs().startOf('month').valueOf());
  });

  it('year', () => {
    expect(moment().startOfYear().valueOf()).toBe(moment().startOf('year').valueOf());
    expect(moment().startOfYear().valueOf()).toBe(momentjs().startOf('year').valueOf());
  });

  it('hour', () => {
    expect(moment().startOfHour().valueOf()).toBe(moment().startOf('hour').valueOf());
    expect(moment().startOfHour().valueOf()).toBe(momentjs().startOf('hour').valueOf());
  });

  it('minute', () => {
    expect(moment().startOfMinute().valueOf()).toBe(moment().startOf('minute').valueOf());
    expect(moment().startOfMinute().valueOf()).toBe(momentjs().startOf('minute').valueOf());
  });

  it('second', () => {
    expect(moment().startOfSecond().valueOf()).toBe(moment().startOf('second').valueOf());
    expect(moment().startOfSecond().valueOf()).toBe(momentjs().startOf('second').valueOf());
  });
});
