import { Moment } from '../../index';
import { Units } from '../../constants';
declare module '../../index' {
  export interface Range {
    start: Moment;
    end: Moment;
  }

  export interface Moment {
    today(): this;
    yesterday(): this;
    tomorrow(): this;
    thisWeek(): Range;
    lastWeek(): Range;
    nextWeek(): Range;
    thisMonth(): Range;
    lastMonth(): Range;
    nextMonth(): Range;
    thisYear(): Range;
    lastYear(): Range;
    nextYear(): Range;
  }
}

export default () => {
  return (Moment: Moment) => {
    const proto = (Moment as any).prototype as Moment;

    proto.today = function () {
      return this.add(0, Units.day);
    }

    proto.yesterday = function () {
      return this.minus(1, Units.day);
    }

    proto.tomorrow = function () {
      return this.add(1, Units.day);
    }

    proto.thisWeek = function () {
      return {
        start: this.startOf(Units.week),
        end: this.endOf(Units.week),
      };
    }

    proto.lastWeek = function () {
      const date = this.minus(1, Units.week);

      return {
        start: date.startOf(Units.week),
        end: date.endOf(Units.week),
      };
    }

    proto.nextWeek = function () {
      const date = this.add(1, Units.week);

      return {
        start: date.startOf(Units.week),
        end: date.endOf(Units.week),
      };
    }

    proto.thisMonth = function () {
      return {
        start: this.startOf(Units.month),
        end: this.endOf(Units.month),
      };
    }

    proto.lastMonth = function () {
      const date = this.minus(1, Units.month);

      return {
        start: date.startOf(Units.month),
        end: date.endOf(Units.month),
      };
    }

    proto.nextMonth = function () {
      const date = this.add(1, Units.month);

      return {
        start: date.startOf(Units.month),
        end: date.endOf(Units.month),
      };
    }

    proto.thisYear = function () {
      return {
        start: this.startOf(Units.year),
        end: this.endOf(Units.year),
      };
    }

    proto.lastYear = function () {
      const date = this.minus(1, Units.year);

      return {
        start: date.startOf(Units.year),
        end: date.endOf(Units.year),
      };
    }

    proto.nextYear = function () {
      const date = this.add(1, Units.year);

      return {
        start: date.startOf(Units.year),
        end: date.endOf(Units.year),
      };
    }
  }
}
