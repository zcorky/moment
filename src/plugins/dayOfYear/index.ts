import { Moment } from '../../index';
import { MILLISECONDS_A_DAY } from '../../constants';

declare module '../../index' {
  export interface Moment {
    dayOfYear(): number;
  }
}

export default () => ({
  install(Moment: Moment) {
    const proto = (Moment as any).prototype as Moment;

    proto.dayOfYear = function () {
      return Math.floor((this.valueOf() - this.startOf('year').valueOf()) / MILLISECONDS_A_DAY) + 1;
    }
  },
});
