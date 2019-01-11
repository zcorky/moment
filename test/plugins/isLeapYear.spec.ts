import * as momentjs from 'moment';
import moment, { Moment } from '../../src';
import isLeapYear from '../../src/plugins/isLeapYear';

Moment.extend(isLeapYear());

describe('isLeapYear', () => {
  it('works', () => {
    expect(moment('2016-01-01').isLeapYear()).toBeTruthy();
    expect(moment('2015-01-01').isLeapYear()).toBeFalsy();
    expect(moment('2014-01-01').isLeapYear()).toBeFalsy();
    expect(moment('2013-01-01').isLeapYear()).toBeFalsy();
    expect(moment('2012-01-01').isLeapYear()).toBeTruthy();
    expect(moment('2000-01-01').isLeapYear()).toBeTruthy();
    expect(moment('1900-01-01').isLeapYear()).toBeFalsy();
  });
});
