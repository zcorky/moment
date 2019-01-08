import moment from '../src';

// @TODO
describe('locale', () => {
  it('works', () => {
    const a = moment();
    const b = a.locale();

    expect(a).toBe(b);
    expect(a.valueOf()).toBe(b.valueOf());
  });
});
