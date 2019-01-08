import { Moment } from '../src';

const momentjs = () => new Moment();

describe('set', () => {
  it('year', () => {
    const mj = momentjs();
    expect(mj.set('year', 2018).year())
      .toBe(2018);
  });

  it('month', () => {
    const mj = momentjs();
    expect(mj.set('month', 8).month())
      .toBe(8);
  });

  it('day', () => {
    const mj = momentjs();
    expect(mj.set('day', 8).day())
      .toBe(8);
  });

  // it('week', () => {
  //   const mj = momentjs();
  //   expect(mj.set('week', 6).week())
  //     .toBe(6);
  // });

  it('hour', () => {
    const mj = momentjs();
    expect(mj.set('hour', 8).hour())
      .toBe(8);
  });

  it('minute', () => {
    const mj = momentjs();
    expect(mj.set('minute', 8).minute())
      .toBe(8);
  });

  it('second', () => {
    const mj = momentjs();
    expect(mj.set('second', 8).second())
      .toBe(8);
  });

  it('milliSecond', () => {
    const mj = momentjs();
    expect(mj.set('millisecond', 8).milliSecond())
      .toBe(8);
  });
});
