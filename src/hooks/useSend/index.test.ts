import { renderHook } from '@testing-library/react-hooks'

import { renderHookWithMachines } from '../../../testUtils'
import useSend from '.'

describe('useSend', () => {
  it('is truthy', () => {
    expect(useSend).toBeTruthy()
  })

  it('throws error when used with no context provided', () => {
    renderHook(() => {
      expect(useSend('LOGIN')).toThrowError()
    })
  })

  it('throws error when used with no context for machineId provided', () => {
    renderHookWithMachines(() => {
      expect(useSend('LOGIN', 'missing')).toThrowError()
    })
  })

  it('throws error when used with no type argument', () => {
    renderHookWithMachines(() => {
      expect(useSend('')).toThrowError()
    })
  })
})

describe('useSend type', () => {
  it('returns enhanced handler from event as string', () => {
    const { result } = renderHookWithMachines(() => useSend('LOGOUT'))

    expect(result.current).toBeInstanceOf(Function)
  })

  it('returns enhanced handler from event as string with machineId', () => {
    const { result } = renderHookWithMachines(() =>
      useSend('INCREMENT', 'count')
    )

    expect(result.current).toBeInstanceOf(Function)
  })

  it('returns enhanced handler from event as object', () => {
    const { result } = renderHookWithMachines(() => useSend({ type: 'LOGOUT' }))

    expect(result.current).toBeInstanceOf(Function)
  })

  it('returns enhanced handler from event as object with machineId', () => {
    const { result } = renderHookWithMachines(() =>
      useSend({ type: 'INCREMENT' }, 'count')
    )

    expect(result.current).toBeInstanceOf(Function)
  })
})
