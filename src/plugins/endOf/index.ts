import { Moment } from '../../index';

declare module '../../index' {
  export interface Moment {
    endOfDay(): Moment;
    endOfWeek(): Moment;
    endOfMonth(): Moment;
    endOfYear(): Moment;
    endOfHour(): Moment;
    endOfMinute(): Moment;
    endOfSecond(): Moment;
  }
}

export default () => {
  /* tslint:disable-next-line */
  return (Moment: Moment) => {
    const proto = (Moment as any).prototype as Moment;

    proto.endOfDay = function () {
      return this.endOf('day');
    };

    proto.endOfWeek = function () {
      return this.endOf('week');
    };

    proto.endOfMonth = function () {
      return this.endOf('month');
    };

    proto.endOfYear = function () {
      return this.endOf('year');
    };

    proto.endOfHour = function () {
      return this.endOf('hour');
    };

    proto.endOfMinute = function () {
      return this.endOf('minute');
    };

    proto.endOfSecond = function () {
      return this.endOf('second');
    };
  }
}
