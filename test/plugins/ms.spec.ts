import * as momentjs from 'moment';
import moment, { Moment } from '../../src';
import ms from '../../src/plugins/ms';

Moment.extend(ms());

describe('ms', () => {
  it('ms', () => {
    const t = 123;
    expect(moment(t).ms()).toBe(`123ms`);
  });

  it('s', () => {
    const t = 23123;
    expect(moment(t).ms()).toBe(`24s`);
  });

  it('m', () => {
    const t = 123123;
    expect(moment(t).ms()).toBe(`3m`);
  });

  it('h', () => {
    const t = 23123123;
    expect(moment(t).ms()).toBe(`7h`);
  });

  it('d', () => {
    const t = 3123123000;
    expect(moment(t).ms()).toBe(`37d`);
  });

  it('more than 1 year', () => {
    const t = 123123123000;
    expect(moment(t).ms()).toBe(`Mon, 26 Nov 1973 00:52:03 GMT`);
  });
});
