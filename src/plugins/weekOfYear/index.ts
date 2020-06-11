import { Moment } from '../../index';
import dayOfYear from '../dayOfYear';

Moment.use(dayOfYear());

declare module '../../index' {
  export interface Moment {
    weekOfYear(): number;
  }
}

export default () => ({
  install(Moment: Moment) {
    const proto = (Moment as any).prototype as Moment;

    proto.weekOfYear = function () {
      return Math.ceil(this.dayOfYear() / 7);
    }
  },
});
