import { FC, ReactNode, ReactElement } from 'react'

import { TUseMatchesArgs } from '../types'
import useMatches from '../hooks/useMatches'

type TMatchesProps = {
  children: ReactNode
} & TUseMatchesArgs

const Matches: FC<TMatchesProps> = ({ context, not, value, children }) => {
  const matches = useMatches({ context, not, value })

  if (matches) return children as ReactElement

  return null
}

export default Matches
