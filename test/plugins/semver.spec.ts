import * as momentjs from 'moment';
import moment, { Moment } from '../../src';
import semver from '../../src/plugins/semver';

Moment.extend(semver());

describe('semver', () => {
  it('today', () => {
    expect(moment().today().format('YYYY-MM-DD')).toBe(momentjs().format('YYYY-MM-DD'));
  });

  it('yesterday', () => {
    expect(moment().yesterday().format('YYYY-MM-DD')).toBe(momentjs().subtract(1, 'day').format('YYYY-MM-DD'));
  });

  it('tomorrow', () => {
    expect(moment().tomorrow().format('YYYY-MM-DD')).toBe(momentjs().add(1, 'day').format('YYYY-MM-DD'));
  });

  it('thisWeek', () => {
    const a = (() => {
      const range = moment().thisWeek();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs();
      return {
        start: date.startOf('week').format('YYYY-MM-DD'),
        end: date.endOf('week').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });

  it('lastWeek', () => {
    const a = (() => {
      const range = moment().lastWeek();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs().subtract(1, 'week');
      return {
        start: date.startOf('week').format('YYYY-MM-DD'),
        end: date.endOf('week').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });

  it('nextWeek', () => {
    const a = (() => {
      const range = moment().nextWeek();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs().add(1, 'week');
      return {
        start: date.startOf('week').format('YYYY-MM-DD'),
        end: date.endOf('week').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });

  it('thisMonth', () => {
    const a = (() => {
      const range = moment().thisMonth();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs();
      return {
        start: date.startOf('month').format('YYYY-MM-DD'),
        end: date.endOf('month').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });

  it('lastMonth', () => {
    const a = (() => {
      const range = moment().lastMonth();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs().subtract(1, 'month');
      return {
        start: date.startOf('month').format('YYYY-MM-DD'),
        end: date.endOf('month').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });

  it('nextMonth', () => {
    const a = (() => {
      const range = moment().nextMonth();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs().add(1, 'month');
      return {
        start: date.startOf('month').format('YYYY-MM-DD'),
        end: date.endOf('month').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });

  it('thisYear', () => {
    const a = (() => {
      const range = moment().thisYear();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs();
      return {
        start: date.startOf('year').format('YYYY-MM-DD'),
        end: date.endOf('year').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });

  it('lastYear', () => {
    const a = (() => {
      const range = moment().lastYear();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs().subtract(1, 'year');
      return {
        start: date.startOf('year').format('YYYY-MM-DD'),
        end: date.endOf('year').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });

  it('nextYear', () => {
    const a = (() => {
      const range = moment().nextYear();
      return {
        start: range.start.format('YYYY-MM-DD'),
        end: range.end.format('YYYY-MM-DD'),
      };
    })();

    const b = (() => {
      const date = momentjs().add(1, 'year');
      return {
        start: date.startOf('year').format('YYYY-MM-DD'),
        end: date.endOf('year').format('YYYY-MM-DD'),
      };
    })();

    expect(a).toEqual(b);
  });
});
