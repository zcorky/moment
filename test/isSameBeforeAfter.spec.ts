import moment from '../src';

describe('Is Same/Before/After', () => {
  it('moment', () => {
    const dayA = moment()
    const dayB = dayA.clone().add(1, 'day')
    const dayC = dayA.clone().subtract(1, 'day')
    expect(dayC.isBefore(dayA)).toBe(true)
    expect(dayA.isSame(moment(), 'day')).toBe(true)
    expect(dayB.isAfter(dayA)).toBe(true)
  })

  it('string', () => {
    const dayD = moment()
    expect(dayD.isSame('20180101')).toBe(false)
    expect(dayD.isAfter('20180101')).toBe(true)
    expect(dayD.isBefore('20180101')).toBe(false)
  })
})
