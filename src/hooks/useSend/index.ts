import { useCallback, useRef } from 'react'

import { TUseSend } from '../../types'
import useContextMachine from '../useContextMachine'
import { getEventListener } from '../../utils'

const useSend: TUseSend = (type, machineId) => {
  // keep the reference to state avoiding recreating the fn
  const [state, send] = useContextMachine(machineId) || []

  if (!state) {
    throw new Error(
      machineId
        ? `The useSend hook/Send component should be used on a component below an Interpret context with machine with id as ${machineId}`
        : 'The useSend hook/Send component should be used on a component below an Interpret context'
    )
  }

  if (!type) {
    throw new Error(
      'The type argument is required in order to send an event to the machine'
    )
  }

  const stateRef = useRef(state)
  stateRef.current = state

  // maintain the type reference to avoid recreating the fn
  const typeRef = useRef(type)
  typeRef.current = type

  return useCallback(
    (event) => {
      if (stateRef.current && send) {
        const eventListener = getEventListener({
          state: stateRef.current,
          send,
          type: typeRef.current
        })

        eventListener(event)
      }
    },
    [send]
  )
}

export default useSend
