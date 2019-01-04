import { expect } from 'chai';

import * as moment from 'moment';
import { Moment } from '../src';

const momentjs = (d?: number | string | Date) => new Moment({ date: d });

describe('parse', () => {
  it('now', () => {
    const now = new Date();
    expect(momentjs(now).valueOf()).to.be.equal(moment(now).valueOf());
  });

  it('format: 20130208', () => {
    const date = '20130208';
    expect(momentjs(date).valueOf()).to.be.equal(moment(date).valueOf());
  });

  it('format: 2013-02-08', () => {
    const date = '2013-02-08';
    expect(momentjs(date).valueOf()).to.be.equal(moment(date).valueOf());
  });

  it('format: 2013-02-08', () => {
    const date = '2013-02-08';
    expect(momentjs(date).valueOf()).to.be.equal(moment(date).valueOf());
  });

  it('format: 2018-05-02 11:12:13', () => {
    const date = '2018-05-02 11:12:13';
    expect(momentjs(date).valueOf()).to.be.equal(moment(date).valueOf());
  });

  it('format: 2018-05-02 11:12:13.998', () => {
    const date = '2018-05-02 11:12:13.998';
    expect(momentjs(date).valueOf()).to.be.equal(moment(date).valueOf());
  });

  it('format: 2018-05-02T11:12:13Z', () => {
    const date = '2018-05-02T11:12:13Z';
    expect(momentjs(date).valueOf()).to.be.equal(moment(date).valueOf());
  });

  it('format: 1546569450994', () => {
    const date = 1546569450994;
    expect(momentjs(date).valueOf()).to.be.equal(moment(date).valueOf());
  });
});
