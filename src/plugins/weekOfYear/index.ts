import { Moment } from '../../index';
import dayOfYear from '../dayOfYear';
import { MILLISECONDS_A_DAY } from '../../constants';

Moment.extend(dayOfYear());

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
      return Math.ceil(this.dayOfYear() / 7);
    }
  };
};
