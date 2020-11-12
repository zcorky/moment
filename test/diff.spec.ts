import * as momentjs from 'moment';
import moment from '../src';

describe('set', () => {
  it('year', () => {
    expect(moment('2018-08-08').diff('2018-11-07', 'year'))
      .toBe(momentjs('2018-08-08').diff('2018-11-07', 'year'));

    expect(moment('2018-08-08').diff('2018-11-08', 'year'))
      .toBe(momentjs('2018-08-08').diff('2018-11-08', 'year'));

    expect(moment('2018-08-08').diff('2018-11-09', 'year'))
      .toBe(momentjs('2018-08-08').diff('2018-11-09', 'year'));

    expect(moment('2018-08-08').diff('2038-11-07', 'year'))
      .toBe(momentjs('2018-08-08').diff('2038-11-07', 'year'));

    expect(moment('2018-08-08').diff('2038-11-08', 'year'))
      .toBe(momentjs('2018-08-08').diff('2038-11-08', 'year'));

    expect(moment('2018-08-08').diff('2038-11-09', 'year'))
      .toBe(momentjs('2018-08-08').diff('2038-11-09', 'year'));
  });

  it('month', () => {
    expect(moment('2018-08-08').diff('2018-11-07', 'month'))
      .toBe(momentjs('2018-08-08').diff('2018-11-07', 'month'));

    expect(moment('2018-08-08').diff('2018-11-08', 'month'))
      .toBe(momentjs('2018-08-08').diff('2018-11-08', 'month'));

    expect(moment('2018-08-08').diff('2018-11-09', 'month'))
      .toBe(momentjs('2018-08-08').diff('2018-11-09', 'month'));

    expect(moment('2018-08-08').diff('2038-11-07', 'month'))
      .toBe(momentjs('2018-08-08').diff('2038-11-07', 'month'));

    expect(moment('2018-08-08').diff('2038-11-08', 'month'))
      .toBe(momentjs('2018-08-08').diff('2038-11-08', 'month'));

    expect(moment('2018-08-08').diff('2038-11-09', 'month'))
      .toBe(momentjs('2018-08-08').diff('2038-11-09', 'month'));
  });

  it('day', () => {
    expect(moment('2018-08-08').diff('2019-01-09', 'day'))
      .toBe(momentjs('2018-08-08').diff('2019-01-09', 'day'));

    expect(moment(new Date('2018-08-08')).diff(new Date('2019-01-09'), 'day'))
      .toBe(momentjs('2018-08-08').diff('2019-01-09', 'day'));

    expect(moment(new Date('2018-08-08').getTime()).diff(new Date('2019-01-09').getTime(), 'day'))
      .toBe(momentjs('2018-08-08').diff('2019-01-09', 'day'));

    expect(moment(moment('2018-08-08')).diff(moment('2019-01-09'), 'day'))
      .toBe(momentjs('2018-08-08').diff('2019-01-09', 'day'));
  });

  it('week', () => {
    expect(moment('2018-08-08').diff('2019-01-09', 'week'))
      .toBe(momentjs('2018-08-08').diff('2019-01-09', 'week'));
  });

  it('hour', () => {
    expect(moment('2018-08-08').diff('2019-01-09', 'hour'))
      .toBe(momentjs('2018-08-08').diff('2019-01-09', 'hour'));
  });

  it('minute', () => {
    expect(moment('2018-08-08').diff('2019-01-09', 'minute'))
      .toBe(momentjs('2018-08-08').diff('2019-01-09', 'minute'));
  });

  it('second', () => {
    expect(moment('2018-08-08').diff('2019-01-09', 'second'))
      .toBe(momentjs('2018-08-08').diff('2019-01-09', 'second'));
  });

  it('no unit', () => {
    expect(moment('2020-11-12 12:55:00').diff(moment('2020-11-12 12:40:00'))).toEqual({
      days: 0,
      hours: 0,
      minutes: 15,
      seconds: 0,
      milliseconds: 0,
    });

    expect(moment('2020-11-12 12:55:15').diff(moment('2020-11-12 12:40:00'))).toEqual({
      days: 0,
      hours: 0,
      minutes: 15,
      seconds: 15,
      milliseconds: 0,
    });

    expect(moment('2020-11-12 13:55:15').diff(moment('2020-11-12 12:40:00'))).toEqual({
      days: 0,
      hours: 1,
      minutes: 15,
      seconds: 15,
      milliseconds: 0,
    });
  });
});
