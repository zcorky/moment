import moment from '../src';

describe('immutable', () => {
  it('clone', () => {
    const a = moment();
    const b = a.clone();

    expect(a).not.toBe(b);
    expect(a.valueOf()).toBe(b.valueOf());
  });
});
