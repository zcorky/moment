import * as momentjs from 'moment';
import moment, { Moment } from '../../src';
import dayOfYear from '../../src/plugins/dayOfYear';
import { padStart } from '../../src/utils';

Moment.use(dayOfYear());

describe('dayOfYear', () => {
  it('works', () => {
    const t = '2018-08-08';
    expect(moment(t).dayOfYear()).toBe(momentjs(t).dayOfYear());
  });

  it('before', () => {
    const now = moment();
    const t = `2018-08-08 ${now.format('HH:mm:ss')}`;
    const _t = `2018-08-08 ${padStart(String(now.hour()), 2, '0')}:${padStart(String(now.minute() - 1), 2, '0')}:${padStart(String(now.second()), 2, '0')}`;
    expect(moment(t).dayOfYear()).toBe(momentjs(_t).dayOfYear());
  });

  it('equal', () => {
    const now = moment();
    const t = `2018-08-08 ${now.format('HH:mm:ss')}`;
    const _t = `2018-08-08 ${padStart(String(now.hour()), 2, '0')}:${padStart(String(now.minute()), 2, '0')}:${padStart(String(now.second()), 2, '0')}`;
    expect(moment(t).dayOfYear()).toBe(momentjs(_t).dayOfYear());
  });

  it('after', () => {
    const now = moment();
    const t = `2018-08-08 ${now.format('HH:mm:ss')}`;
    const _t = `2018-08-08 ${padStart(String(now.hour()), 2, '0')}:${padStart(String(now.minute() + 1), 2, '0')}:${padStart(String(now.second()), 2, '0')}`;
    expect(moment(t).dayOfYear()).toBe(momentjs(_t).dayOfYear());
  });
});
