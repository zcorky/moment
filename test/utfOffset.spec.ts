import moment from '../src';
import * as momentjs from 'moment';

// @TODO
describe('locale', () => {
  it('works', () => {
    expect(moment().utcOffset()).toBe(momentjs().utcOffset());
  });
});
