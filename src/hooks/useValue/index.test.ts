import { renderHookWithMachines } from '../../../testUtils'
import useValue from '.'
import { TState } from '../../types'

describe('useValue', () => {
  it('is truthy', () => {
    expect(useValue).toBeTruthy()
  })
})

describe('useValue state', () => {
  it('returns the state value', () => {
    const { result } = renderHookWithMachines(() => useValue())

    expect(result.current).toBe('logged')
  })

  it('returns the state value with machineId', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ machineId: 'count' })
    )

    expect(result.current).toBe('idle')
  })
})

describe('useValue context', () => {
  it('returns a context value by key', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ context: 'name' })
    )

    expect(result.current).toBe('Marcelo Silva')
  })

  it('returns a context value by key with machineId', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ context: 'value', machineId: 'count' })
    )

    expect(result.current).toBe(0)
  })

  it('returns a deep context value by key', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ context: 'languages[0].name' })
    )

    expect(result.current).toBe('Portuguese')
  })

  it('returns a deep context value by key with machineId', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ context: 'increments.min[0]', machineId: 'count' })
    )

    expect(result.current).toBe(5)
  })
})

describe('useValue parse', () => {
  it('returns the result of parse function', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ parse: () => 'Ignoring any value' })
    )

    expect(result.current).toBe('Ignoring any value')
  })

  it('returns the parsed return of parse function', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ parse: (value) => value.toUpperCase() })
    )

    expect(result.current).toBe('LOGGED')
  })

  it('returns the parsed return of parse function with machineId', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ machineId: 'count', parse: (value) => value.toUpperCase() })
    )

    expect(result.current).toBe('IDLE')
  })

  it('returns the context result of parse function', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({ context: 'name', parse: (value) => value.toUpperCase() })
    )

    expect(result.current).toBe('MARCELO SILVA')
  })

  it('returns the context result of parse function with machineId', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({
        context: 'value',
        machineId: 'count',
        parse: (value) => value + 20
      })
    )

    expect(result.current).toBe(20)
  })

  it('returns the deep context result of parse function', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({
        context: 'languages[1].name',
        parse: (value) => value.toUpperCase()
      })
    )

    expect(result.current).toBe('ENGLISH')
  })

  it('returns the deep context result of parse function with machineId', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({
        context: 'increments.max[1]',
        machineId: 'count',
        parse: (value) => value * 5
      })
    )

    expect(result.current).toBe(500)
  })
})

describe('useValue fallback', () => {
  it('returns the fallback value when context is undefined', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({
        context: 'age',
        fallback: 'No field with key age on user machine'
      })
    )

    expect(result.current).toBe('No field with key age on user machine')
  })

  it('returns the fallback value when context is undefined', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({
        context: 'maximum',
        fallback: 'No field with key maximum on user machine',
        machineId: 'count'
      })
    )

    expect(result.current).toBe('No field with key maximum on user machine')
  })

  it('returns the result of fallback as function when context is undefined', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({
        context: 'age',
        fallback: () => 'No age field on user machine'
      })
    )

    expect(result.current).toBe('No age field on user machine')
  })

  it('returns the result of fallback as function receiving state as param', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({
        context: 'dateOfBirth.day',
        fallback: (state: TState) => state.value
      })
    )

    expect(result.current).toBe('logged')
  })

  it('returns the result of fallback as function receiving state as param', () => {
    const { result } = renderHookWithMachines(() =>
      useValue({
        context: 'values.skip',
        fallback: (state: TState) => state.value,
        machineId: 'count'
      })
    )

    expect(result.current).toBe('idle')
  })
})
