import { FC } from 'react'

import { TMatchesProps } from '../../types'
import useMatches from '../../hooks/useMatches'
import useContextMachine from '../../hooks/useContextMachine'

const Matches: FC<TMatchesProps> = ({
  machineId,
  value,
  context,
  not,
  children,
  fallback = null
}) => {
  const matches = useMatches(value, { machineId, context, not })

  const [state] = useContextMachine(machineId) || []

  // If children is a function, we execute it with the boolean and state
  if (typeof children === 'function') {
    return (children as any)(matches, state)
  }

  if (matches) return children

  // Execute the fallback as function or just render it
  if (typeof fallback === 'function') {
    return fallback(state)
  }

  return fallback
}

export default Matches
