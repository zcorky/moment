import * as moment from 'moment';
import { Moment } from '../src';

const momentjs = (d: Date) => new Moment({ date: d });

describe('set', () => {
  const today = new Date();
  const mj = momentjs(today);
  const mo = moment(today);

  // it('toString', () => {
  //   expect(mj.toString())
  //     .toBe(mo.toString());
  // });

  it('toString', () => {
    expect(mj.toString())
      .toBe(today.toUTCString());
  });

  it('toISOString', () => {
    expect(mj.toISOString())
      .toBe(mo.toISOString());
  });

  it('toJSON', () => {
    expect(mj.toJSON())
      .toBe(mo.toJSON());
  });

  it('toArray', () => {
    expect(mj.toArray())
      .toEqual(mo.toArray());
  });

  // it('toObject', () => {
  //   expect(mj.toObject())
  //     .toEqual(mo.toObject());
  // });

  it('toObject', () => {
    expect(mj.toObject())
      .toEqual(['year', 'month', 'day', 'hour', 'minute', 'second', 'milliSecond', 'week']
      .reduce((last, k) => (last[k] = mj[k].call(mj), last), {}));
  });

  it('toDate', () => {
    expect(mj.toDate().toString())
      .toBe(mo.toDate().toString());
  });
});
