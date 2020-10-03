import { FC } from 'react'

import { TValueProps } from '../../types'
import useValue from '../../hooks/useValue'
import useContextMachine from '../../hooks/useContextMachine'

const Value: FC<TValueProps> = ({
  machineId,
  context,
  children,
  fallback = null
}) => {
  // the children as function acts like parse on hooks
  let parse: any

  if (typeof children === 'function') {
    parse = children
  }

  // gets the value with right params
  const value = useValue({ machineId, context, parse, fallback })

  // when value is a nested state object, we use the string version
  const [state] = useContextMachine(machineId) || []

  let parsedValue = value

  if (state && !context && typeof value === 'object') {
    parsedValue = state.toStrings().pop()
  }

  return parsedValue
}

export default Value
