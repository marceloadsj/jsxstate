import { useMemo } from 'react'

import { TUseSend } from '../../types'
import useContextMachine from '../useContextMachine'
import { getEventListener, noop } from '../../utils'

const useSend: TUseSend = (type, { machineId } = {}) => {
  const context = useContextMachine(machineId)

  return useMemo(() => {
    if (context) {
      const [state, send] = context

      return getEventListener({ state, send, type })
    }

    return noop
  }, [context, type])
}

export default useSend
