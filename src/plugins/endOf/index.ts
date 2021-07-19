import { Moment } from '../../index';
import { Units } from '../../constants';

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

export default () => ({
  install(Moment: Moment) {
    const proto = (Moment as any).prototype as Moment;

    proto.endOfDay = function () {
      return this.endOf(Units.day);
    };

    proto.endOfWeek = function () {
      return this.endOf(Units.week);
    };

    proto.endOfMonth = function () {
      return this.endOf(Units.month);
    };

    proto.endOfYear = function () {
      return this.endOf(Units.year);
    };

    proto.endOfHour = function () {
      return this.endOf(Units.hour);
    };

    proto.endOfMinute = function () {
      return this.endOf(Units.minute);
    };

    proto.endOfSecond = function () {
      return this.endOf(Units.second);
    };
  },
});
