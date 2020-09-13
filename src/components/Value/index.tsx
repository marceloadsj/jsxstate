import { FC, ReactNode } from 'react'

import { TState } from '../../types'
import useValue from '../../hooks/useValue'

type TValueProps = {
  machineId?: string
  context?: string
  parse?: (value: any, state: TState) => ReactNode
  fallback?: ReactNode
}

const Value: FC<TValueProps> = ({
  machineId,
  context,
  parse,
  fallback = null
}) => {
  const value = useValue({ machineId, context, parse, fallback })

  if (value === undefined) return fallback

  if (value?.toString?.() === '[object Object]') return null

  return value
}

export default Value
