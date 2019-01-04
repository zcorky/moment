import { expect } from 'chai';
import * as moment from 'moment';
import { Moment } from '../src';

const momentjs = (d: Date) => new Moment({ date: d });

describe('minus', () => {
  const now = new Date();

  it('year', () => {
    expect(momentjs(now).minus(5, 'year').valueOf())
      .to.be.equal(moment(now).subtract(5, 'year').valueOf());
  });

  it('month: 3', () => {
    expect(momentjs(now).minus(3, 'month').valueOf())
      .to.be.equal(moment(now).subtract(3, 'month').valueOf());
  });

  it('month: 18', () => {
    expect(momentjs(now).minus(18, 'month').valueOf())
      .to.be.equal(moment(now).subtract(18, 'month').valueOf());
  });

  it('month: 128', () => {
    expect(momentjs(now).minus(128, 'month').valueOf())
      .to.be.equal(moment(now).subtract(128, 'month').valueOf());
  });

  it('day: 1', () => {
    expect(momentjs(now).minus(1, 'day').valueOf())
      .to.be.equal(moment(now).subtract(1, 'day').valueOf());
  });

  it('day: 8', () => {
    expect(momentjs(now).minus(8, 'day').valueOf())
      .to.be.equal(moment(now).subtract(8, 'day').valueOf());
  });

  it('day: 88', () => {
    expect(momentjs(now).minus(88, 'day').valueOf())
      .to.be.equal(moment(now).subtract(88, 'day').valueOf());
  });

  it('day: 888', () => {
    expect(momentjs(now).minus(888, 'day').valueOf())
      .to.be.equal(moment(now).subtract(888, 'day').valueOf());
  });

  it('day: 8888', () => {
    expect(momentjs(now).minus(8888, 'day').valueOf())
      .to.be.equal(moment(now).subtract(8888, 'day').valueOf());
  });

  it('hour: 1', () => {
    expect(momentjs(now).minus(1, 'hour').valueOf())
      .to.be.equal(moment(now).subtract(1, 'hour').valueOf());
  });

  it('hour: 8', () => {
    expect(momentjs(now).minus(8, 'hour').valueOf())
      .to.be.equal(moment(now).subtract(8, 'hour').valueOf());
  });

  it('hour: 88', () => {
    expect(momentjs(now).minus(88, 'hour').valueOf())
      .to.be.equal(moment(now).subtract(88, 'hour').valueOf());
  });

  it('hour: 888', () => {
    expect(momentjs(now).minus(888, 'hour').valueOf())
      .to.be.equal(moment(now).subtract(888, 'hour').valueOf());
  });

  it('hour: 8888', () => {
    expect(momentjs(now).minus(8888, 'hour').valueOf())
      .to.be.equal(moment(now).subtract(8888, 'hour').valueOf());
  });

  it('minute: 1', () => {
    expect(momentjs(now).minus(1, 'minute').valueOf())
      .to.be.equal(moment(now).subtract(1, 'minute').valueOf());
  });

  it('minute: 8', () => {
    expect(momentjs(now).minus(8, 'minute').valueOf())
      .to.be.equal(moment(now).subtract(8, 'minute').valueOf());
  });

  it('minute: 88', () => {
    expect(momentjs(now).minus(88, 'minute').valueOf())
      .to.be.equal(moment(now).subtract(88, 'minute').valueOf());
  });

  it('minute: 888', () => {
    expect(momentjs(now).minus(888, 'minute').valueOf())
      .to.be.equal(moment(now).subtract(888, 'minute').valueOf());
  });

  it('minute: 8888', () => {
    expect(momentjs(now).minus(8888, 'minute').valueOf())
      .to.be.equal(moment(now).subtract(8888, 'minute').valueOf());
  });

  it('second: 1', () => {
    expect(momentjs(now).minus(1, 'second').valueOf())
      .to.be.equal(moment(now).subtract(1, 'second').valueOf());
  });

  it('second: 8', () => {
    expect(momentjs(now).minus(8, 'second').valueOf())
      .to.be.equal(moment(now).subtract(8, 'second').valueOf());
  });

  it('second: 88', () => {
    expect(momentjs(now).minus(88, 'second').valueOf())
      .to.be.equal(moment(now).subtract(88, 'second').valueOf());
  });

  it('second: 888', () => {
    expect(momentjs(now).minus(888, 'second').valueOf())
      .to.be.equal(moment(now).subtract(888, 'second').valueOf());
  });

  it('second: 8888', () => {
    expect(momentjs(now).minus(8888, 'second').valueOf())
      .to.be.equal(moment(now).subtract(8888, 'second').valueOf());
  });

  it('millisecond: 1', () => {
    expect(momentjs(now).minus(1, 'millisecond').valueOf())
      .to.be.equal(moment(now).subtract(1, 'millisecond').valueOf());
  });

  it('millisecond: 8', () => {
    expect(momentjs(now).minus(8, 'millisecond').valueOf())
      .to.be.equal(moment(now).subtract(8, 'millisecond').valueOf());
  });

  it('millisecond: 88', () => {
    expect(momentjs(now).minus(88, 'millisecond').valueOf())
      .to.be.equal(moment(now).subtract(88, 'millisecond').valueOf());
  });

  it('millisecond: 888', () => {
    expect(momentjs(now).minus(888, 'millisecond').valueOf())
      .to.be.equal(moment(now).subtract(888, 'millisecond').valueOf());
  });

  it('millisecond: 8888', () => {
    expect(momentjs(now).minus(8888, 'millisecond').valueOf())
      .to.be.equal(moment(now).subtract(8888, 'millisecond').valueOf());
  });

  it('week: 1', () => {
    expect(momentjs(now).minus(1, 'week').valueOf())
      .to.be.equal(moment(now).subtract(1, 'week').valueOf());
  });

  it('week: 8', () => {
    expect(momentjs(now).minus(8, 'week').valueOf())
      .to.be.equal(moment(now).subtract(8, 'week').valueOf());
  });

  it('week: 88', () => {
    expect(momentjs(now).minus(88, 'week').valueOf())
      .to.be.equal(moment(now).subtract(88, 'week').valueOf());
  });

  it('week: 888', () => {
    expect(momentjs(now).minus(888, 'week').valueOf())
      .to.be.equal(moment(now).subtract(888, 'week').valueOf());
  });

  it('week: 8888', () => {
    expect(momentjs(now).minus(8888, 'week').valueOf())
      .to.be.equal(moment(now).subtract(8888, 'week').valueOf());
  });
});
