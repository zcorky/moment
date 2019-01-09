import { Moment } from '../../index';
import { Units } from '../../constants';

declare module '../../index' {
  export interface Moment {
    monday(): this;
    tuesday(): this;
    wednesday(): this;
    thursday(): this;
    friday(): this;
    saturday(): this;
    sunday(): this;
  }
}

export default () => {
  return (Moment: Moment) => {
    const proto = (Moment as any).prototype as Moment;
  
    proto.monday = function () {
      return this.startOf(Units.week);
    }
  
    proto.tuesday = function () {
      return this.startOf(Units.week).add(1, Units.day);
    }
  
    proto.wednesday = function () {
      return this.startOf(Units.week).add(2, Units.day);
    }
  
    proto.thursday = function () {
      return this.startOf(Units.week).add(3, Units.day);
    }
  
    proto.friday = function () {
      return this.startOf(Units.week).add(4, Units.day);
    }
  
    proto.saturday = function () {
      return this.startOf(Units.week).add(5, Units.day);
    }
  
    proto.sunday = function () {
      return this.startOf(Units.week).add(6, Units.day);
    }
  };
};