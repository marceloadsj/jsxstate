import { renderHook } from '@testing-library/react-hooks'

import { renderHookWithMachines } from '../../../testUtils'
import useContextMachine from '.'

describe('useContextMachine', () => {
  it('is truthy', () => {
    expect(useContextMachine).toBeTruthy()
  })

  it('throws error when used with no context provided', () => {
    renderHook(() => {
      expect(useContextMachine()).toThrowError()
    })
  })

  it('throws error when used with no context for machineId provided', () => {
    renderHookWithMachines(() => {
      expect(useContextMachine('missing')).toThrowError()
    })
  })
})

describe('useSend machineId', () => {
  it('returns the machine array', () => {
    const { result } = renderHookWithMachines(() => useContextMachine())

    expect(result.current).toBeInstanceOf(Array)
  })

  it('returns the machine state', () => {
    const { result } = renderHookWithMachines(() => useContextMachine())

    expect(result.current[0]).toBeInstanceOf(Object)
  })

  it('returns the machine state value', () => {
    const { result } = renderHookWithMachines(() => useContextMachine())

    expect(result.current[0].value).toBe('logged')
  })

  it('returns the machine send', () => {
    const { result } = renderHookWithMachines(() => useContextMachine())

    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('returns the machine service', () => {
    const { result } = renderHookWithMachines(() => useContextMachine())

    expect(result.current[2]).toBeInstanceOf(Object)
  })

  it('returns the machine array with machineId', () => {
    const { result } = renderHookWithMachines(() => useContextMachine('count'))

    expect(result.current).toBeInstanceOf(Array)
  })

  it('returns the machine state with machineId', () => {
    const { result } = renderHookWithMachines(() => useContextMachine('count'))

    expect(result.current[0]).toBeInstanceOf(Object)
  })

  it('returns the machine state value with machineId', () => {
    const { result } = renderHookWithMachines(() => useContextMachine('count'))

    expect(result.current[0].value).toBe('idle')
  })

  it('returns the machine send with machineId', () => {
    const { result } = renderHookWithMachines(() => useContextMachine('count'))

    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('returns the machine service with machineId', () => {
    const { result } = renderHookWithMachines(() => useContextMachine('count'))

    expect(result.current[2]).toBeInstanceOf(Object)
  })
})
