import { expect } from 'chai';

import * as wmoment from 'moment';
import moment from '../src';

describe('@zcorky/moment', () => {
  it('complex', () => {
    const now = Date.now();
    const i = moment(now).startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
    const m = wmoment(now).startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
    expect(i).to.be.equal(m);
  });

  it('moment', () => {
    const now = moment();
    const i = moment(now).startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
    const m = wmoment(now).startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
    expect(i).to.be.equal(m);
  });
});
