import { Moment } from '../../index';

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
      return this.startOf('week');
    }
  
    proto.tuesday = function () {
      return this.startOf('week').add(1, 'day');
    }
  
    proto.wednesday = function () {
      return this.startOf('week').add(2, 'day');
    }
  
    proto.thursday = function () {
      return this.startOf('week').add(3, 'day');
    }
  
    proto.friday = function () {
      return this.startOf('week').add(4, 'day');
    }
  
    proto.saturday = function () {
      return this.startOf('week').add(5, 'day');
    }
  
    proto.sunday = function () {
      return this.startOf('week').add(6, 'day');
    }
  };
};