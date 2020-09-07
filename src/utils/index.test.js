import { get, getEventListener, getAttributeValue } from '.'

describe('get', () => {
  it('is truthy', () => {
    expect(get).toBeTruthy()
  })

  it('first arg not obj return itself', () => {
    expect(get('a')).toBe('a')
  })

  it('second arg not string return first arg', () => {
    expect(get('a', {})).toBe('a')
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

  it('single arg return itself', () => {
    const obj = {}

    expect(get(obj)).toBe(obj)
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

  it('throw if called without args', () => {
    expect(() => getEventListener()).toThrow()
  })

  it('get a fn', () => {
    expect(getEventListener({})).toBeInstanceOf(Function)
  })

  it('call send fn', () => {
    let result

    const send = () => {
      result = 'a'
    }

    const eventListener = getEventListener({ send, type: 'b' })

    eventListener()

    expect(result).toBe('a')
  })

  it('do not call send fn if no type', () => {
    let result

    const send = () => {
      result = 'a'
    }

    const eventListener = getEventListener({ send })

    eventListener()

    expect(result).toBe(undefined)
  })

  it('call type fn', () => {
    let result

    const type = () => {
      result = 'a'
    }

    const eventListener = getEventListener({ type })

    eventListener()

    expect(result).toBe('a')
  })

  it('call type fn with right args', () => {
    const type = (first, second, third) => {
      expect(first).toBe('a')
      expect(second).toBe('b')
      expect(third).toBe('c')
    }

    const eventListener = getEventListener({ type, state: 'b', send: 'c' })

    eventListener('a')
  })
})

describe('getAttributeValue', () => {
  it('is truthy', () => {
    expect(getAttributeValue).toBeTruthy()
  })

  it('throw if called without args', () => {
    expect(() => getAttributeValue()).toThrow()
  })

  it('find right value', () => {
    const state = { context: { count: 'a' } }

    expect(getAttributeValue({ state, value: 'count' })).toBe('a')
  })

  it('do not find right value return itself', () => {
    const state = { context: {} }

    expect(getAttributeValue({ state, value: 'count' })).toBe('count')
  })

  it('call value fn', () => {
    let result

    const value = () => {
      result = 'a'
    }

    getAttributeValue({ value })

    expect(result).toBe('a')
  })

  it('call value fn with right args', () => {
    const value = (state) => {
      expect(state).toBe('a')
    }

    getAttributeValue({ state: 'a', value })
  })
})
