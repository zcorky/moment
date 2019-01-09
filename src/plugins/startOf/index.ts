import { Moment } from '../../index';
import { Units } from '../../constants';

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
      return this.startOf(Units.day);
    };

    proto.startOfWeek = function () {
      return this.startOf(Units.week);
    };

    proto.startOfMonth = function () {
      return this.startOf(Units.month);
    };

    proto.startOfYear = function () {
      return this.startOf(Units.year);
    };

    proto.startOfHour = function () {
      return this.startOf(Units.hour);
    };

    proto.startOfMinute = function () {
      return this.startOf(Units.minute);
    };

    proto.startOfSecond = function () {
      return this.startOf(Units.second);
    };
  }
}
