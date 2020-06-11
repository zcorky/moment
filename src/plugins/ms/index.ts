import { Moment } from '../../index';
import {
  MILLISECONDS_A_SECOND,
  MILLISECONDS_A_MINUTE,
  MILLISECONDS_A_HOUR,
  MILLISECONDS_A_DAY,
} from '../../constants';

declare module '../../index' {
  export interface Moment {
    /**
     * human representation
     */
    ms(): string;
  }
}

// @TODO simple
const MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * 365;

/**
 * 
 * @param value miliseconds value
 */
export function ms(value: number) {
  if (value < MILLISECONDS_A_SECOND) {
    return `${value}ms`;
  } else if (value < MILLISECONDS_A_MINUTE) {
    return `${Math.ceil(value / MILLISECONDS_A_SECOND)}s`;
  } else if (value < MILLISECONDS_A_HOUR) {
    return `${Math.ceil(value / MILLISECONDS_A_MINUTE)}m`;
  } else if (value < MILLISECONDS_A_DAY) {
    return `${Math.ceil(value / MILLISECONDS_A_HOUR)}h`;
  } else {
    return `${Math.ceil(value / MILLISECONDS_A_DAY)}d`;
  }
}

export default () => ({
  install(Moment: Moment) {
    const proto = (Moment as any).prototype as Moment;
    const originToString = proto.toString;

    proto.ms = function () {
      const value = this.valueOf();

      if (value > MILLISECONDS_A_YEAR) {
        return originToString.call(this);
      }

      return ms(value);
    }
  },
});
