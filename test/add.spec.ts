import * as moment from 'moment';
import { Moment } from '../src';

const momentjs = (d: string | Date) => new Moment({ date: d });

describe('add', () => {
  const now = new Date();

  it('year', () => {
    expect(momentjs(now).add(5, 'year').valueOf())
      .toBe(moment(now).add(5, 'year').valueOf());
  });

  it('month: 3', () => {
    expect(momentjs(now).add(3, 'month').valueOf())
      .toBe(moment(now).add(3, 'month').valueOf());
  });

  it('month: 18', () => {
    expect(momentjs(now).add(18, 'month').valueOf())
      .toBe(moment(now).add(18, 'month').valueOf());
  });

  it('month: 128', () => {
    expect(momentjs(now).add(128, 'month').valueOf())
      .toBe(moment(now).add(128, 'month').valueOf());
  });

  it('day: 1', () => {
    console.log(momentjs(now).add(1, 'day').valueOf());
    console.log(moment(now).add(1, 'day').valueOf());
    expect(momentjs(now).add(1, 'day').valueOf())
      .toBe(moment(now).add(1, 'day').valueOf());
  });

  it('day: 8', () => {
    expect(momentjs(now).add(8, 'day').valueOf())
      .toBe(moment(now).add(8, 'day').valueOf());
  });

  it('day: 88', () => {
    expect(momentjs(now).add(88, 'day').valueOf())
      .toBe(moment(now).add(88, 'day').valueOf());
  });

  it('day: 888', () => {
    expect(momentjs(now).add(888, 'day').valueOf())
      .toBe(moment(now).add(888, 'day').valueOf());
  });

  it('day: 8888', () => {
    expect(momentjs(now).add(8888, 'day').valueOf())
      .toBe(moment(now).add(8888, 'day').valueOf());
  });

  it('hour: 1', () => {
    expect(momentjs(now).add(1, 'hour').valueOf())
      .toBe(moment(now).add(1, 'hour').valueOf());
  });

  it('hour: 8', () => {
    expect(momentjs(now).add(8, 'hour').valueOf())
      .toBe(moment(now).add(8, 'hour').valueOf());
  });

  it('hour: 88', () => {
    expect(momentjs(now).add(88, 'hour').valueOf())
      .toBe(moment(now).add(88, 'hour').valueOf());
  });

  it('hour: 888', () => {
    expect(momentjs(now).add(888, 'hour').valueOf())
      .toBe(moment(now).add(888, 'hour').valueOf());
  });

  it('hour: 8888', () => {
    expect(momentjs(now).add(8888, 'hour').valueOf())
      .toBe(moment(now).add(8888, 'hour').valueOf());
  });

  it('minute: 1', () => {
    expect(momentjs(now).add(1, 'minute').valueOf())
      .toBe(moment(now).add(1, 'minute').valueOf());
  });

  it('minute: 8', () => {
    expect(momentjs(now).add(8, 'minute').valueOf())
      .toBe(moment(now).add(8, 'minute').valueOf());
  });

  it('minute: 88', () => {
    expect(momentjs(now).add(88, 'minute').valueOf())
      .toBe(moment(now).add(88, 'minute').valueOf());
  });

  it('minute: 888', () => {
    expect(momentjs(now).add(888, 'minute').valueOf())
      .toBe(moment(now).add(888, 'minute').valueOf());
  });

  it('minute: 8888', () => {
    expect(momentjs(now).add(8888, 'minute').valueOf())
      .toBe(moment(now).add(8888, 'minute').valueOf());
  });

  it('second: 1', () => {
    expect(momentjs(now).add(1, 'second').valueOf())
      .toBe(moment(now).add(1, 'second').valueOf());
  });

  it('second: 8', () => {
    expect(momentjs(now).add(8, 'second').valueOf())
      .toBe(moment(now).add(8, 'second').valueOf());
  });

  it('second: 88', () => {
    expect(momentjs(now).add(88, 'second').valueOf())
      .toBe(moment(now).add(88, 'second').valueOf());
  });

  it('second: 888', () => {
    expect(momentjs(now).add(888, 'second').valueOf())
      .toBe(moment(now).add(888, 'second').valueOf());
  });

  it('second: 8888', () => {
    expect(momentjs(now).add(8888, 'second').valueOf())
      .toBe(moment(now).add(8888, 'second').valueOf());
  });

  it('millisecond: 1', () => {
    expect(momentjs(now).add(1, 'millisecond').valueOf())
      .toBe(moment(now).add(1, 'millisecond').valueOf());
  });

  it('millisecond: 8', () => {
    expect(momentjs(now).add(8, 'millisecond').valueOf())
      .toBe(moment(now).add(8, 'millisecond').valueOf());
  });

  it('millisecond: 88', () => {
    expect(momentjs(now).add(88, 'millisecond').valueOf())
      .toBe(moment(now).add(88, 'millisecond').valueOf());
  });

  it('millisecond: 888', () => {
    expect(momentjs(now).add(888, 'millisecond').valueOf())
      .toBe(moment(now).add(888, 'millisecond').valueOf());
  });

  it('millisecond: 8888', () => {
    expect(momentjs(now).add(8888, 'millisecond').valueOf())
      .toBe(moment(now).add(8888, 'millisecond').valueOf());
  });

  it('week: 1', () => {
    expect(momentjs(now).add(1, 'week').valueOf())
      .toBe(moment(now).add(1, 'week').valueOf());
  });

  it('week: 8', () => {
    expect(momentjs(now).add(8, 'week').valueOf())
      .toBe(moment(now).add(8, 'week').valueOf());
  });

  it('week: 88', () => {
    expect(momentjs(now).add(88, 'week').valueOf())
      .toBe(moment(now).add(88, 'week').valueOf());
  });

  it('week: 888', () => {
    expect(momentjs(now).add(888, 'week').valueOf())
      .toBe(moment(now).add(888, 'week').valueOf());
  });

  it('week: 8888', () => {
    expect(momentjs(now).add(8888, 'week').valueOf())
      .toBe(moment(now).add(8888, 'week').valueOf());
  });

  it('special: 20111031 + 1 month should be 20111130', () => {
    expect(momentjs('20111031').add(1, 'month').valueOf()).toBe(moment('20111031').add(1, 'month').valueOf())
  });
});
