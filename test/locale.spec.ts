import moment from '../src';
import * as momentjs from 'moment';

// @TODO
describe('locale', () => {
  it('default en', () => {
    // const a = moment();
    // const b = a.locale();

    // expect(a).toBe(b);
    expect(moment().locale()).toBe(momentjs().locale());
  });
});
