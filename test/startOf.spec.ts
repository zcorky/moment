import { Moment } from '../src';
import { resolve } from '../src/utils';

const momentjs = (date: Date) => new Moment({
  date,
});

describe('startOf', () => {
  it('year', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.startOf('year').valueOf())
      .toBe(+new Date(dates[0], 0, 1));
  });

  it('month', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.startOf('month').valueOf())
      .toBe(+new Date(dates[0], dates[1], 1));
  });

  it('day', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.startOf('day').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2]));
  });

  it('week', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.startOf('week').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2] - resolve(date).week));
  });

  it('hour', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.startOf('hour').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2], dates[3]));
  });

  it('minute', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.startOf('minute').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2], dates[3], dates[4]));
  });

  it('second', () => {
    const date = new Date();
    const md = momentjs(date);
    const dates = md.toArray();
    expect(md.startOf('second').valueOf())
      .toBe(+new Date(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5]));
  });
});
