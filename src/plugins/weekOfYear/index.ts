import { Moment } from '../../index';
import { MILLISECONDS_A_DAY } from '../../constants';

declare module '../../index' {
  export interface Moment {
    weekOfYear(): number;
  }
}

export default () => {
  /* tslint:disable-next-line */
  return (Moment: Moment) => {
    const proto = (Moment as any).prototype as Moment;

    proto.weekOfYear = function () {
      const dayOfYear = Math.floor((this.valueOf() - this.startOf('year').valueOf()) / MILLISECONDS_A_DAY) + 1;
      return Math.ceil(dayOfYear / 7);
    }
  };
};
