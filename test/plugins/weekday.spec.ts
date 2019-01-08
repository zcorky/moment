import * as momentjs from 'moment';
import moment, { Moment } from '../../src';
import weekday from '../../src/plugins/weekday';

Moment.extend(weekday());

describe('weekday', () => {
  it('monday', () => {
    expect(moment().monday().format('YYYY-MM-DD'))
      .toBe(momentjs().startOf('week').format('YYYY-MM-DD'));
  });

  it('tuesday', () => {
    expect(moment().tuesday().format('YYYY-MM-DD'))
      .toBe(momentjs().startOf('week').add(1, 'day').format('YYYY-MM-DD'));
  });

  it('wednesday', () => {
    expect(moment().wednesday().format('YYYY-MM-DD'))
      .toBe(momentjs().startOf('week').add(2, 'day').format('YYYY-MM-DD'));
  });

  it('thursday', () => {
    expect(moment().thursday().format('YYYY-MM-DD'))
      .toBe(momentjs().startOf('week').add(3, 'day').format('YYYY-MM-DD'));
  });

  it('friday', () => {
    expect(moment().friday().format('YYYY-MM-DD'))
      .toBe(momentjs().startOf('week').add(4, 'day').format('YYYY-MM-DD'));
  });

  it('saturday', () => {
    expect(moment().saturday().format('YYYY-MM-DD'))
      .toBe(momentjs().startOf('week').add(5, 'day').format('YYYY-MM-DD'));
  });

  it('sunday', () => {
    expect(moment().sunday().format('YYYY-MM-DD'))
      .toBe(momentjs().startOf('week').add(6, 'day').format('YYYY-MM-DD'));
  });
});
