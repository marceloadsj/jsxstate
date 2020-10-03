import { renderHookWithMachine } from '../../../testUtils'
import useValue from '.'
import { TState } from '../../types'

describe('useValue', () => {
  it('is truthy', () => {
    expect(useValue).toBeTruthy()
  })
})

describe('useValue state', () => {
  it('returns the state value', () => {
    const { result } = renderHookWithMachine(() => useValue())

    expect(result.current).toBe('idle')
  })
})

describe('useValue context', () => {
  it('returns a context value by key', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({ context: 'message' })
    )

    expect(result.current).toBe('Context Message')
  })

  it('returns a deep context value by key', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({ context: 'nested.list[0].message' })
    )

    expect(result.current).toBe('Nested Context Message')
  })
})

describe('useValue parse', () => {
  it('returns the result of parse function', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({ parse: () => 'Parse' })
    )

    expect(result.current).toBe('Parse')
  })

  it('returns the parsed result of parse function', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({ parse: (value) => value.toUpperCase() })
    )

    expect(result.current).toBe('IDLE')
  })

  it('returns the parsed context result of parse function', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({ context: 'message', parse: (value) => value.toUpperCase() })
    )

    expect(result.current).toBe('CONTEXT MESSAGE')
  })

  it('returns the parsed deep context result of parse function', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({
        context: 'nested.list[0].message',
        parse: (value) => value.toUpperCase()
      })
    )

    expect(result.current).toBe('NESTED CONTEXT MESSAGE')
  })
})

describe('Value fallback', () => {
  it('returns the fallback value when context is undefined', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({
        context: 'missing',
        fallback: 'Fallback'
      })
    )

    expect(result.current).toBe('Fallback')
  })

  it('returns the fallback value when deep context is undefined', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({
        context: 'missing.nested.key',
        fallback: 'Fallback'
      })
    )

    expect(result.current).toBe('Fallback')
  })

  it('returns the result of fallback as function when context is undefined', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({
        context: 'missing',
        fallback: () => 'Fallback'
      })
    )

    expect(result.current).toBe('Fallback')
  })

  it('returns the result of fallback as function when deep context is undefined', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({
        context: 'missing.deep.key',
        fallback: () => 'Fallback'
      })
    )

    expect(result.current).toBe('Fallback')
  })

  it('returns the result of fallback as function receiving state as param', () => {
    const { result } = renderHookWithMachine(() =>
      useValue({
        context: 'missing.deep.key',
        fallback: (state: TState) => state.value
      })
    )

    expect(result.current).toBe('idle')
  })
})
