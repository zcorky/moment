
import {
  number as isNumber,
  undef as isUndef,
} from '@zcorky/is';

import { REGEXP_PARSE, DEFAULT_LOCALES } from './constants';

export const parse = (date?: number | string | Date): Date => {
  // undefine or no data
  if (isUndef(date)) return new Date();
  // timestamps
  if (isNumber(date)) return new Date(date);
  // date
  if (date instanceof Date) return date;

  // match regexp
  if ((/.*[^Z]$/i.test(date)) // @TODO only support ISO Clock
    && REGEXP_PARSE.test(date)
  ) {
    const matches = date.match(REGEXP_PARSE)!;
    return new Date(
      +matches[1], +matches[2] - 1, +matches[3] || 1,
      +matches[5] || 0, +matches[6] || 0, +matches[7] || 0, +matches[8] || 0,
    );
  }

  // uncatch string
  return new Date(date);
}

export const resolve = (date: Date) => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
  week: date.getDay(),
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds(),
  milliSecond: date.getMilliseconds(),
});

export const getFormats = (date: Date, rd: ReturnType<typeof resolve>, locale: typeof DEFAULT_LOCALES = DEFAULT_LOCALES) => {
  const zone = getZone(date);

  return {
    YY: String(rd.year).slice(-2),
    YYYY: String(rd.year),
    M: String(rd.month + 1),
    MM: padStart(String(rd.month + 1), 2, '0'),
    MMM: locale.monthsShort[rd.month],
    MMMM: locale.months[rd.month],
    D: String(rd.day),
    DD: padStart(String(rd.day), 2, '0'),
    d: String(rd.week),
    dd: locale.weekdaysMin[rd.week],
    ddd: locale.weekdaysShort[rd.week],
    dddd: locale.weekdays[rd.week],
    H: String(rd.hour),
    HH: padStart(String(rd.hour), 2, '0'),
    h: get12Hour(rd.hour, 'h'),
    hh: get12Hour(rd.hour, 'hh'),
    a: rd.hour < 12 ? 'am' : 'pm',
    A: rd.hour < 12 ? 'AM' : 'PM',
    m: String(rd.minute),
    mm: padStart(String(rd.minute), 2, '0'),
    s: String(rd.second),
    ss: padStart(String(rd.second), 2, '0'),
    SSS: padStart(String(rd.milliSecond), 3, '0'),
    Z: zone,
    ZZ: zone.replace(':', ''),
  };
};

const repeat = (value: string, times: number) => {
  return Array(times + 1).join(value);
}

export const padStart = (value: string, length: number, pad: string) => {
  if (value.length >= length) return value;
  return `${repeat(pad, length - value.length)}${value}`;
}

const get12Hour = (hour: number, pattern: 'h' | 'hh') => {
  if (hour === 0) return 12;
  return padStart(String(hour < 13 ? hour : hour - 12), pattern === 'hh' ? 2 : 1, '0');
};

export const getZone = (date: Date) => {
  const negMinutes = date.getTimezoneOffset();
  const minutes = Math.abs(negMinutes);
  const hourOffset = Math.floor(minutes / 60);
  const minuteOffset = minutes % 60;
  return `${negMinutes <= 0 ? '+' : '-'}${padStart(String(hourOffset), 2, '0')}:${padStart(String(minuteOffset), 2, '0')}`;
};
