import { SyntheticEvent, useCallback } from 'react'

import { TUseSendArgs } from '../types'
import useMachineRef from './useMachineRef'

type TUseSend = (
  args: string | TUseSendArgs
) => (event?: SyntheticEvent) => any | void

const useSend: TUseSend = (args) => {
  let type: string
  let payload: any

  if (typeof args === 'string') {
    type = args
  } else {
    type = args.type
    payload = args.payload
  }

  const context = useMachineRef()

  const send = context && context[1]

  return useCallback(
    (event?: SyntheticEvent): any | void => {
      if (send) return send({ ...event, ...payload, type })
    },
    [send, type, payload]
  )
}

export default useSend
