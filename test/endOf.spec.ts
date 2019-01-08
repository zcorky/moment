import { Moment } from '../src';
import { resolve } from '../src/utils';

const momentjs = (date: Date) => new Moment({
  date,
});

describe('endOf', () => {
  it('year', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.endOf('year').valueOf())
      .toBe(+new Date(dates[0], 11, 31, 23, 59, 59, 999));
  });

  it('month', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.endOf('month').valueOf())
      .toBe(+new Date(dates[0], dates[1] + 1, 0, 23, 59, 59, 999));
  });

  it('day', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.endOf('day').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2], 23, 59, 59, 999));
  });

  it('week', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.endOf('week').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2] - resolve(date).week + 6, 23, 59, 59, 999));
  });

  it('hour', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.endOf('hour').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2], dates[3], 59, 59, 999));
  });

  it('minute', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.endOf('minute').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2], dates[3], dates[4], 59, 999));
  });

  it('second', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.endOf('second').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], 999));
  });
});
