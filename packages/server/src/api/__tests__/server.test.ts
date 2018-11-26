import { test } from './../api'
import { CounterResult } from '@firebase-monorepo/api-schema'
describe('hello', () => {
  it('hello("jest") to be "Hello Jest!!"', () => {
    expect('Hello Jest!!').toBe('Hello Jest!!')
    test()
  })
  it('Requireing sub project should work', () => {
    expect(CounterResult).not.toBe(null)
  })
})
