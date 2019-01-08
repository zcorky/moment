import { Moment } from '../src';

const momentjs = (date: Date) => new Moment({
  date,
});

describe('semver', () => {
  it('year', () => {
    const date = new Date();
    expect(momentjs(date).year())
      .toBe(date.getFullYear());
  });

  it('month', () => {
    const date = new Date();
    expect(momentjs(date).month())
      .toBe(date.getMonth());
  });

  it('day', () => {
    const date = new Date();
    expect(momentjs(date).day())
      .toBe(date.getDate());
  });

  it('week', () => {
    const date = new Date();
    expect(momentjs(date).week())
      .toBe(date.getDay());
  });

  it('hour', () => {
    const date = new Date();
    expect(momentjs(date).hour())
      .toBe(date.getHours());
  });

  it('minute', () => {
    const date = new Date();
    expect(momentjs(date).minute())
      .toBe(date.getMinutes());
  });

  it('second', () => {
    const date = new Date();
    expect(momentjs(date).second())
      .toBe(date.getSeconds());
  });

  it('milliSecond', () => {
    const date = new Date();
    expect(momentjs(date).milliSecond())
      .toBe(date.getMilliseconds());
  });
});
