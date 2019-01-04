import { expect } from 'chai';

import { Moment } from '../src';

const momentjs = (date: Date) => new Moment({
  date,
});

describe('semver', () => {
  it('year', () => {
    const date = new Date();
    expect(momentjs(date).year())
      .to.be.equal(date.getFullYear());
  });

  it('month', () => {
    const date = new Date();
    expect(momentjs(date).month())
      .to.be.equal(date.getMonth());
  });

  it('day', () => {
    const date = new Date();
    expect(momentjs(date).day())
      .to.be.equal(date.getDate());
  });

  it('week', () => {
    const date = new Date();
    expect(momentjs(date).week())
      .to.be.equal(date.getDay());
  });

  it('hour', () => {
    const date = new Date();
    expect(momentjs(date).hour())
      .to.be.equal(date.getHours());
  });

  it('minute', () => {
    const date = new Date();
    expect(momentjs(date).minute())
      .to.be.equal(date.getMinutes());
  });

  it('second', () => {
    const date = new Date();
    expect(momentjs(date).second())
      .to.be.equal(date.getSeconds());
  });

  it('milliSecond', () => {
    const date = new Date();
    expect(momentjs(date).milliSecond())
      .to.be.equal(date.getMilliseconds());
  });
});
