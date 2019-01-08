import { Moment } from '../../index';

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
      return this.add(0, 'day');
    }
  
    proto.yesterday = function () {
      return this.minus(1, 'day');
    }
  
    proto.tomorrow = function () {
      return this.add(1, 'day');
    }
  
    proto.thisWeek = function () {
      return {
        start: this.startOf('week'),
        end: this.endOf('week'),
      };
    }
  
    proto.lastWeek = function () {
      const date = this.minus(1, 'week');
  
      return {
        start: date.startOf('week'),
        end: date.endOf('week'),
      };
    }
  
    proto.nextWeek = function () {
      const date = this.add(1, 'week');
  
      return {
        start: date.startOf('week'),
        end: date.endOf('week'),
      };
    }
  
    proto.thisMonth = function () {
      return {
        start: this.startOf('month'),
        end: this.endOf('month'),
      };
    }
  
    proto.lastMonth = function () {
      const date = this.minus(1, 'month');
  
      return {
        start: date.startOf('month'),
        end: date.endOf('month'),
      };
    }
  
    proto.nextMonth = function () {
      const date = this.add(1, 'month');
  
      return {
        start: date.startOf('month'),
        end: date.endOf('month'),
      };
    }
  
    proto.thisYear = function () {
      return {
        start: this.startOf('year'),
        end: this.endOf('year'),
      };
    }
  
    proto.lastYear = function () {
      const date = this.minus(1, 'year');
  
      return {
        start: date.startOf('year'),
        end: date.endOf('year'),
      };
    }
  
    proto.nextYear = function () {
      const date = this.add(1, 'year');
  
      return {
        start: date.startOf('year'),
        end: date.endOf('year'),
      };
    }
  }
}