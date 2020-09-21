import React, { ForwardRefRenderFunction, forwardRef } from 'react'

import { TSendProps } from '../../types'
import { getEventListener, getAttributeValue } from '../../utils'
import { reactEvents, reactAttributes } from '../../constants'
import useContextMachine from '../../hooks/useContextMachine'

const Send: ForwardRefRenderFunction<any, TSendProps> = (
  { as: As = 'button', machineId, ...props },
  ref
) => {
  const context = useContextMachine(machineId)

  // If no context provided, we simply render the standard component
  if (!context) return <As {...props} ref={ref} />

  const [state, send] = context
  const propEntries = Object.entries(props)

  const parsedProps = {}

  // Parse event listeners to enhance them to send them to the machine
  propEntries
    .filter(([key]) => reactEvents.has(key))
    .forEach(([key, type]) => {
      parsedProps[key] = getEventListener({
        state,
        send,
        type
      })
    })

  // Parse some other props to attach their value to machine state
  propEntries
    .filter(([key]) => reactAttributes.has(key))
    .forEach(([key, value]) => {
      parsedProps[key] = getAttributeValue({ state, value })
    })

  return <As {...props} {...parsedProps} ref={ref} />
}

export default forwardRef(Send)
