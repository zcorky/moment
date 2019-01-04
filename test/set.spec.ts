import { expect } from 'chai';

import { Moment } from '../src';

const momentjs = () => new Moment();

describe('set', () => {
  it('year', () => {
    const mj = momentjs();
    expect(mj.set('year', 2018).year())
      .to.be.equal(2018);
  });

  it('month', () => {
    const mj = momentjs();
    expect(mj.set('month', 8).month())
      .to.be.equal(8);
  });

  it('day', () => {
    const mj = momentjs();
    expect(mj.set('day', 8).day())
      .to.be.equal(8);
  });

  // it('week', () => {
  //   const mj = momentjs();
  //   expect(mj.set('week', 6).week())
  //     .to.be.equal(6);
  // });

  it('hour', () => {
    const mj = momentjs();
    expect(mj.set('hour', 8).hour())
      .to.be.equal(8);
  });

  it('minute', () => {
    const mj = momentjs();
    expect(mj.set('minute', 8).minute())
      .to.be.equal(8);
  });

  it('second', () => {
    const mj = momentjs();
    expect(mj.set('second', 8).second())
      .to.be.equal(8);
  });

  it('milliSecond', () => {
    const mj = momentjs();
    expect(mj.set('millisecond', 8).milliSecond())
      .to.be.equal(8);
  });
});
