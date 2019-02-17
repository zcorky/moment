import {
  parse,
  resolve,
  getFormats,
  getDiff,
} from './utils';
import {
  DEFAULT_FORMAT_PATTERN,
  REGEXP_FORMAT,
  Units, SetMethods, DEFAULT_LOCALES, INVALID_DATE,
} from './constants';

export type Unit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond' | 'week';

export type Locale = typeof DEFAULT_LOCALES;

export type ResolveDate = ReturnType<typeof resolve>;

export type IDate = Date | Moment | string | number;

export interface Moment {
  // chain
  startOf(unit: Unit): Moment;
  endOf(unit: Unit): Moment;
  set(unit: Unit, value: number): Moment;
  add(delta: number, unit: Unit): Moment;
  minus(delta: number, unit: Unit): Moment;
  subtract(delta: number, unit: Unit): Moment;

  // value
  locale(): string;
  utcOffset(): number;

  // of
  format(pattern: string): string;
  // fromNow(): string;
  valueOf(): number;

  // to
  toString(): string;
  toISOString(): string;
  toJSON(): string;
  toArray(): number[];
  toDate(): Date;
  toObject(): ResolveDate;

  // semver
  year(): number;
  month(): number;
  day(): number;
  week(): number;
  hour(): number;
  minute(): number;
  second(): number;
  milliSecond(): number;

  // is
  isValid(): boolean;
  isSame(date: IDate, unit: Unit): boolean;
  isAfter(date: IDate, unit: Unit): boolean;
  isBefore(date: IDate, unit: Unit): boolean;

  // cases
  lastDayInMonth(): number;

  // plugin
  // extend<T>(plugin: Plugin<T>, options: T): void
}

export interface Options {
  /**
   * Date String
   *  support 2019-01-01 00:00:00
   *  support 2019/01/01 00:00:00
   *  support 20190101 00:00:00
   *  support 2019-01-03T06:26:57.873Z
   */
  date?: Date | Moment | string | number;

  locale?: Locale;
}

export type Plugin = (M: Moment) => void;

export const moment = (date?: IDate, options?: Options): Moment => {
  if (date instanceof Moment) {
    return date.clone();
  }

  const _options = options || {};
  _options.date = date;
  return new Moment(_options);
}

const wrapper = (date: IDate, instance: Moment) =>
  moment(date, { locale: (instance as any).$locale }); // @TODO private variable

export class Moment {
  /* common date */
  private $d: Date;
  /* date resolver */
  private $r: ResolveDate;
  /* locale */
  private $locale: Locale;

  // public static plugin<T>(fn: Plugin<T>, options: T) {
  //   fn(Moment, options);
  // }

  public static extend(plugin: Plugin) {
    plugin(Moment as any as Moment); // @TODO
  }

  constructor(options?: Options) {
    const _options = options || {} as Options;
    this.$d = _options.date instanceof Moment ? _options.date.$d : parse(_options.date);
    this.$locale = _options.locale || DEFAULT_LOCALES;

    this.init();
  }

  private init() {
    this.$r = resolve(this.$d);
    return this;
  }

  protected $of(unit?: Unit, isStartOf?: boolean): Moment {
    const instanceFactory = (day: number, month: number) => {
      const ins = wrapper(new Date(this.$r.year, month, day), this);
      return isStartOf ? ins : ins.endOf(Units.day);
    }

    const instanceFactorySet = (method: string, slices: number) => {
      const argsStart = [0, 0, 0, 0];
      const argsEnd = [23, 59, 59, 999];
      return wrapper(this.toDate()[method].apply(
        this.toDate(),
        (isStartOf ? argsStart : argsEnd).slice(slices),
      ), this)
    };

    switch (unit) {
      case Units.year:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case Units.month:
        return isStartOf ? instanceFactory(1, this.$r.month) : instanceFactory(0, this.$r.month + 1);
      case Units.week:
        return isStartOf
          ? instanceFactory(this.$r.day - this.$r.week, this.$r.month)
          : instanceFactory(this.$r.day - this.$r.week + 6, this.$r.month);
      case Units.day:
        return instanceFactorySet('setHours', 0);
      case Units.hour:
        return instanceFactorySet('setMinutes', 1);
      case Units.minute:
        return instanceFactorySet('setSeconds', 2);
      case Units.second:
        return instanceFactorySet('setMilliseconds', 3);
      default:
        return this.clone();
    }
  }

  protected $set(unit: Unit, value: number): this {
    const name = SetMethods[unit];
    const method = this.$d[name];
    method.call(this.$d, value);

    // re init
    this.init();

    return this;
  }

  public lastDayInMonth(): number {
    return this.endOf(Units.month).day();
  }

  public startOf(unit?: Unit) {
    return this.$of(unit, true);
  }

  public endOf(unit?: Unit) {
    return this.$of(unit, false);
  }

  public set(unit: Unit, value: number) {
    // clone => immutable
    // @TODO
    return (this.clone() as Moment).$set(unit, value);
  }

  public add(delta: number, unit: Unit) {
    const instanceFactor = (u: Unit, current: number) => {
      return this.set(u, current + delta);
    };

    const instanceFactorSetMonth = (current: number) => {
      // special day: lastDayOfMonth
      if (this.day() === this.lastDayInMonth()) {
        const date = this
          .set(Units.day, 1)
          .set(Units.month, current + delta);
        const day = Math.min(this.day(), date.lastDayInMonth());
        return date.set(Units.day, day);
      }

      return instanceFactor(Units.month, current);
    };

    const instanceFactorSetWeek = () => {
      return this.set(Units.day, this.$r.day + delta * 7);
    }

    switch (unit) {
      case Units.year:
        return instanceFactor(unit, this.$r.year);
      case Units.day:
        return instanceFactor(unit, this.$r.day);
      case Units.hour:
        return instanceFactor(unit, this.$r.hour);
      case Units.minute:
        return instanceFactor(unit, this.$r.minute);
      case Units.second:
        return instanceFactor(unit, this.$r.second);
      case Units.milliSecond:
        return instanceFactor(unit, this.$r.milliSecond);
      case Units.month:
        return instanceFactorSetMonth(this.$r.month);
      case Units.week:
        return instanceFactorSetWeek();
      default:
        return this;
    }
  }

  public minus(delta: number, unit: Unit) {
    return this.add(delta * -1, unit);
  }

  public subtract(delta: number, unit: Unit) {
    return this.minus(delta, unit);
  }

  public format(pattern: string = DEFAULT_FORMAT_PATTERN): string {
    if (!this.isValid()) return INVALID_DATE;

    const formats = getFormats(this.$d, this.$r, this.$locale);
    return pattern.replace(REGEXP_FORMAT, match => {
      if (match.indexOf('[') !== -1) return match.replace(/\[|\]/g, '');

      return formats[match];
    });
  }

  public clone() {
    return wrapper(this.toDate(), this);
  }

  public diff(input: Date | Moment | number | string, unit: Unit) {
    return getDiff(this, moment(input), unit);
  }

  public valueOf() {
    return this.$d.getTime();
  }

  public toString() {
    return this.$d.toUTCString();
  }

  public toISOString() {
    return this.$d.toISOString();
  }

  public toJSON() {
    return this.toISOString();
  }

  public toArray() {
    return [
      this.$r.year,
      this.$r.month,
      this.$r.day,
      this.$r.hour,
      this.$r.minute,
      this.$r.second,
      this.$r.milliSecond,
    ];
  }

  public toObject() {
    return this.$r;
  }

  public toDate() {
    return new Date(this.$d);
  }

  public locale() {
    return 'en'; // @TODO
  }

  public utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }

  public year() {
    return this.$r.year;
  }

  public month() {
    return this.$r.month;
  }

  public day() {
    return this.$r.day;
  }

  public week() {
    return this.$r.week;
  }

  public hour() {
    return this.$r.hour;
  }

  public minute() {
    return this.$r.minute;
  }

  public second() {
    return this.$r.second;
  }

  public milliSecond() {
    return this.$r.milliSecond;
  }

  public isValid() {
    return !(this.$d.toString() === INVALID_DATE);
  }

  public isSame(date: IDate, unit?: Unit) {
    const m = moment(date);
    return this.startOf(unit) <= m && m <= this.endOf(unit);
  }

  public isBefore(date: IDate, unit?: Unit) {
    return this.endOf(unit) < moment(date);
  }

  public isAfter(date: IDate, unit?: Unit) {
    return moment(date) < this.startOf(unit);
  }
}

export default moment;
