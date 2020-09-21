import { FC } from 'react'

import { TValueProps } from '../../types'
import useValue from '../../hooks/useValue'
import useContextMachine from '../../hooks/useContextMachine'

const Value: FC<TValueProps> = ({
  machineId,
  context,
  parse,
  children,
  fallback = null
}) => {
  const value = useValue({ machineId, context, parse, fallback })

  const [state] = useContextMachine(machineId) || []

  if (value === undefined) {
    // Execute the fallback as function or just render it
    if (typeof fallback === 'function') {
      return fallback(state)
    }

    return fallback
  }

  // If children is a function, we execute it with the value and state
  if (typeof children === 'function') {
    return (children as any)(value, state)
  }

  return value
}

export default Value
