import { expect } from 'chai';

import * as moment from 'moment';
import { Moment } from '../src';

const momentjs = (d: Date) => new Moment({ date: d });

describe('set', () => {
  const today = new Date();
  const mj = momentjs(today);
  const mo = moment(today);

  // it('toString', () => {
  //   expect(mj.toString())
  //     .to.be.equal(mo.toString());
  // });

  it('toString', () => {
    expect(mj.toString())
      .to.be.equal(today.toUTCString());
  });

  it('toISOString', () => {
    expect(mj.toISOString())
      .to.be.equal(mo.toISOString());
  });

  it('toJSON', () => {
    expect(mj.toJSON())
      .to.be.equal(mo.toJSON());
  });

  it('toArray', () => {
    expect(mj.toArray())
      .to.be.deep.equal(mo.toArray());
  });

  // it('toObject', () => {
  //   expect(mj.toObject())
  //     .to.be.deep.equal(mo.toObject());
  // });

  it('toObject', () => {
    expect(mj.toObject())
      .to.be.deep.equal(['year', 'month', 'day', 'hour', 'minute', 'second', 'milliSecond', 'week']
      .reduce((last, k) => (last[k] = mj[k].call(mj), last), {}));
  });

  it('toDate', () => {
    expect(mj.toDate().toString())
      .to.be.equal(mo.toDate().toString());
  });
});
