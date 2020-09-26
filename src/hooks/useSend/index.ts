import { useMemo } from 'react'

import { TUseSend } from '../../types'
import useContextMachine from '../useContextMachine'
import { getEventListener } from '../../utils'

const useSend: TUseSend = (type, { machineId } = {}) => {
  const context = useContextMachine(machineId)

  return useMemo(() => {
    if (!context) return undefined

    const [state, send] = context

    return getEventListener({ state, send, type })
  }, [context, type])
}

export default useSend
