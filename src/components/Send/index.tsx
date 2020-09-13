import React, { ForwardRefRenderFunction, forwardRef } from 'react'

import { getEventListener, getAttributeValue } from '../../utils'
import { reactEvents, reactAttributes } from '../../constants'
import useContextMachine from '../../hooks/useContextMachine'

type TSendProps = {
  as: any
  machineId?: string
}

const Send: ForwardRefRenderFunction<any, TSendProps> = (
  { as: As = 'button', machineId, ...props },
  ref
) => {
  const context = useContextMachine(machineId)

  if (!context) return <As {...props} ref={ref} />

  const [state, send] = context
  const propEntries = Object.entries(props)

  const parsedProps = {}

  propEntries
    .filter(([key]) => reactEvents.has(key))
    .forEach(([key, type]) => {
      parsedProps[key] = getEventListener({
        state,
        send,
        type
      })
    })

  propEntries
    .filter(([key]) => reactAttributes.has(key))
    .forEach(([key, value]) => {
      parsedProps[key] = getAttributeValue({ state, value })
    })

  return <As {...props} {...parsedProps} ref={ref} />
}

export default forwardRef(Send)
