import { Moment } from '../../index';
declare module '../../index' {
  export interface Moment {
    isLeapYear(): boolean;
  }
}

export default () => ({
  install(Moment: Moment) {
    const proto = (Moment as any).prototype as Moment;

    proto.isLeapYear = function () {
      const year = this.year();
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
  },
});
