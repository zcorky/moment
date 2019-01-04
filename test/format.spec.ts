import { expect } from 'chai';

import * as moment from 'moment';
import { Moment, Locale } from '../src';
import { padStart, getZone } from '../src/utils';

const momentjs = (d?: string | Date) => new Moment({ date: d });
const pad = (value: number) => padStart(String(value), 2, '0');
const pad3 = (value: number) => padStart(String(value), 3, '0');
const zone = getZone(new Date());

describe('format', () => {
  describe('common', () => {
    it('default: YYYY-MM-DDTHH:mm:ssZ', () => {
      const mj = momentjs();
      expect(mj.format())
        .to.be.equal(`${mj.year()}-${pad(mj.month() + 1)}-${pad(mj.day())}T${pad(mj.hour())}:${pad(mj.minute())}:${pad(mj.second())}${zone}`);
    });

    it('YYYY-MM-DD HH:mm:ss', () => {
      const mj = momentjs();
      expect(mj.format('YYYY-MM-DD HH:mm:ss'))
        .to.be.equal(`${mj.year()}-${pad(mj.month() + 1)}-${pad(mj.day())} ${pad(mj.hour())}:${pad(mj.minute())}:${pad(mj.second())}`);
    });

    it('YYYY/MM/DD HH:mm:ss', () => {
      const mj = momentjs();
      expect(mj.format('YYYY/MM/DD HH:mm:ss'))
        .to.be.equal(`${mj.year()}/${pad(mj.month() + 1)}/${pad(mj.day())} ${pad(mj.hour())}:${pad(mj.minute())}:${pad(mj.second())}`);
    });

    it('YYYY/MM/DD HH:mm:ss.SSS', () => {
      const mj = momentjs();
      expect(mj.format('YYYY/MM/DD HH:mm:ss.SSS'))
        .to.be.equal(`${mj.year()}/${pad(mj.month() + 1)}/${pad(mj.day())} ${pad(mj.hour())}:${pad(mj.minute())}:${pad(mj.second())}.${pad3(mj.milliSecond())}`);
    });

    it('dddd D, MMMMM', () => {
      const mj = momentjs();
      expect(mj.format('dddd D, MMMM'))
        .to.be.equal(`${((mj as any).$locale as Locale).weekdays[mj.week()]} ${mj.day()}, ${((mj as any).$locale as Locale).months[mj.month()]}`);
    });

    it('YYYY-MM-DD HH:mm:ss a', () => {
      const mj = momentjs();
      expect(mj.format('YYYY-MM-DD HH:mm:ss a'))
        .to.be.equal(`${mj.year()}-${pad(mj.month() + 1)}-${pad(mj.day())} ${pad(mj.hour())}:${pad(mj.minute())}:${pad(mj.second())} ${mj.hour() < 12 ? 'am' : 'pm'}`);
    });

    it('YYYY-MM-DD hh:mm:ss A', () => {
      const mj = momentjs();
      expect(mj.format('YYYY-MM-DD hh:mm:ss A'))
        .to.be.equal(
          `${mj.year()}-${pad(mj.month() + 1)}-${pad(mj.day())}` +
          ` ${pad(mj.hour() < 13 ? mj.hour() : mj.hour() - 12)}:${pad(mj.minute())}:${pad(mj.second())} ${mj.hour() < 12 ? 'AM' : 'PM'}`
        );
    });
  });

  describe('moment', () => {
    it('Format empty string', () => {
      console.log(momentjs().format(), moment().format());
      expect(momentjs().format()).to.be.equal(moment().format());
    });

    it('Format escaped string', () => {
      expect(momentjs().format('YYYY [escaped] YYYY')).to.be.equal(moment().format('YYYY [escaped] YYYY'));
    });
  });
});
