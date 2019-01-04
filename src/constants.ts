export const DEFAULT_LOCALES = {
  name: 'en',
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'October', 'November', 'December'],
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
};

export const DEFAULT_FORMAT_PATTERN = 'YYYY-MM-DDTHH:mm:ssZ';

/**
 * Date String Regular Expression
 *  support 2019-01-01 00:00:00
 *  support 2019/01/01 00:00:00
 *  support 20190101 00:00:00
 *  support 2019-01-03T06:26:57.873Z
 */
export const REGEXP_PARSE = /^(\d{4})[-\/]?(\d{1,2})[-\/]?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?Z?$/;

export const REGEXP_FORMAT = /\[.*?\]|Y{4}|Y{2}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

export enum Units {
  year = 'year',
  month = 'month',
  day = 'day',
  hour = 'hour',
  minute = 'minute',
  second = 'second',
  milliSecond = 'millisecond',
  week = 'week',
 };

export enum SetMethods {
  year = 'setFullYear',
  month = 'setMonth',
  day = 'setDate',
  hour = 'setHours',
  minute = 'setMinutes',
  second = 'setSeconds',
  // @millisecond not milliSecond, just for semver
  millisecond = 'setMilliseconds',
};

export const SECONDS_A_MINUTE = 60;
export const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
export const SECONDS_A_DAY = SECONDS_A_HOUR * 24;
export const SECONDS_A_WEEK = SECONDS_A_DAY * 7;

export const MILLISECONDS_A_SECOND = 1e3;
export const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
export const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
export const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
export const MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;

export const INVALID_DATE = 'Invalid Date';
