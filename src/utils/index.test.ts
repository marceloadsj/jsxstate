import { SyntheticEvent } from 'react'
import { get, getEventListener, getAttributeValue } from '.'
import { TState, TSend } from '../types'

describe('get', () => {
  it('is truthy', () => {
    expect(get).toBeTruthy()
  })

  it('second arg not right string format return undefined', () => {
    expect(get({}, '..')).toBeUndefined()
    expect(get({}, '..a')).toBeUndefined()
    expect(get({}, 'a..')).toBeUndefined()
    expect(get({}, '[]')).toBeUndefined()
    expect(get({}, '[')).toBeUndefined()
    expect(get({}, '')).toBeUndefined()
    expect(get({}, 'a[')).toBeUndefined()
    expect(get({}, ']a')).toBeUndefined()
    expect(get({}, '[.')).toBeUndefined()
    expect(get({}, '.]')).toBeUndefined()
    expect(get({}, '[.]')).toBeUndefined()
    expect(get({}, '[.a]')).toBeUndefined()
    expect(get({}, '[a.]')).toBeUndefined()
  })

  it('find value', () => {
    const obj = { a: 1 }

    expect(get(obj, 'a')).toBe(1)
  })

  it('do not find value', () => {
    const obj = { a: 1 }

    expect(get(obj, 'b')).toBeUndefined()
  })

  it('find value inside array', () => {
    const obj = { a: [{ b: 1 }] }

    expect(get(obj, 'a[0].b')).toBe(1)
  })

  it('do not find value inside array', () => {
    const obj = { a: [{ b: 1 }] }

    expect(get(obj, 'a[1].b')).toBeUndefined()
  })

  it('find value on first arg as array', () => {
    const obj = [{ b: 1 }]

    expect(get(obj, '[0].b')).toBe(1)
  })

  it('do not find value on first arg as array', () => {
    const obj = [{ b: 1 }]

    expect(get(obj, '[1].b')).toBeUndefined()
  })
})

describe('getEventListener', () => {
  it('is truthy', () => {
    expect(getEventListener).toBeTruthy()
  })

  it('get a fn', () => {
    const state = ({} as unknown) as TState

    const send = jest.fn()

    const type = 'a'

    expect(getEventListener({ state, send, type })).toBeInstanceOf(Function)
  })

  it('call send fn', () => {
    let result

    const state = ({} as unknown) as TState

    const send = ((() => {
      result = 'a'
    }) as unknown) as TSend

    const eventListener = getEventListener({ state, send, type: 'b' })

    eventListener({} as SyntheticEvent)

    expect(result).toBe('a')
  })

  it('call type fn', () => {
    let result

    const type = () => {
      result = 'a'
    }

    const state = ({} as unknown) as TState

    const send = ((() => {
      result = 'b'
    }) as unknown) as TSend

    const eventListener = getEventListener({ state, send, type })

    eventListener({} as SyntheticEvent)

    expect(result).toBe('a')
  })

  it('call type fn with right args', () => {
    const type = (first: string, second: string, third: string) => {
      expect(first).toBe('a')
      expect(second).toBe('b')
      expect(third).toBe('c')
    }

    const state = ('b' as unknown) as TState

    const send = ('c' as unknown) as TSend

    const eventListener = getEventListener({ state, send, type })

    eventListener(('a' as unknown) as SyntheticEvent)
  })
})

describe('getAttributeValue', () => {
  it('is truthy', () => {
    expect(getAttributeValue).toBeTruthy()
  })

  it('find right value', () => {
    const state = ({ context: { count: 'a' } } as unknown) as TState

    expect(getAttributeValue({ state, value: 'count' })).toBe('a')
  })

  it('do not find right value return itself', () => {
    const state = ({ context: {} } as unknown) as TState

    expect(getAttributeValue({ state, value: 'count' })).toBe('count')
  })

  it('call value fn', () => {
    let result

    const state = ({} as unknown) as TState

    const value = () => {
      result = 'a'
    }

    getAttributeValue({ state, value })

    expect(result).toBe('a')
  })

  it('call value fn with right args', () => {
    const state = ('a' as unknown) as TState

    let result

    const value = (state: string) => {
      result = state
    }

    getAttributeValue({ state, value })

    expect(result).toBe('a')
  })
})
