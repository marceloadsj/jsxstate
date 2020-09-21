import { FC, ReactElement } from 'react'

import { TMatchesProps } from '../../types'
import useMatches from '../../hooks/useMatches'

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
