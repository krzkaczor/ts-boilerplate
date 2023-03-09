import { expect } from 'earljs'

import { greet } from '.'

describe(greet.name, () => {
  it('greets', async () => {
    expect(await greet('kris')).toEqual('Hello kris')
  })
})
