import { FC, ReactNode, ReactElement } from 'react'

import { TState } from '../../types'
import useMatches from '../../hooks/useMatches'

type TMatchesProps = {
  machineId?: string
  context?: string
  not?: boolean
  value?: string | ((value: any, state: TState) => boolean)
  fallback?: ReactNode
}

const Matches: FC<TMatchesProps> = ({
  machineId,
  context,
  not,
  value,
  fallback = null,
  children
}) => {
  const matches = useMatches({ machineId, context, not, value })

  if (matches) return children as ReactElement

  return fallback as ReactElement
}

export default Matches
