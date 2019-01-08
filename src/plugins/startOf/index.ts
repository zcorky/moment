import { Moment } from '../../index';

declare module '../../index' {
  export interface Moment {
    startOfDay(): Moment;
    startOfWeek(): Moment;
    startOfMonth(): Moment;
    startOfYear(): Moment;
    startOfHour(): Moment;
    startOfMinute(): Moment;
    startOfSecond(): Moment;
  }
}

export default () => {
  /* tslint:disable-next-line */
  return (Moment: Moment) => {
    const proto = (Moment as any).prototype as Moment;

    proto.startOfDay = function () {
      return this.startOf('day');
    };

    proto.startOfWeek = function () {
      return this.startOf('week');
    };

    proto.startOfMonth = function () {
      return this.startOf('month');
    };

    proto.startOfYear = function () {
      return this.startOf('year');
    };

    proto.startOfHour = function () {
      return this.startOf('hour');
    };

    proto.startOfMinute = function () {
      return this.startOf('minute');
    };

    proto.startOfSecond = function () {
      return this.startOf('second');
    };
  }
}
