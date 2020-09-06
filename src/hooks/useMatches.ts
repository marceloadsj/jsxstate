import { useContext } from 'react'
import get from 'lodash.get'

import { IUseMatchesArgs } from '../types'
import MachineContext from '../MachineContext'

type TUseMatches = (
  args: IUseMatchesArgs
) => boolean | ((value: string) => boolean)

const useMatches: TUseMatches = ({ context, not, value }) => {
  const [state] = useContext(MachineContext) || []

  if (state) {
    let valueMatches

    if (context) {
      if (typeof value === 'function') {
        valueMatches = value(get(state.context, context), state)
      } else {
        valueMatches = get(state.context, context) === value
      }
    } else {
      if (typeof value === 'function') {
        valueMatches = value(state.value, state)
      } else {
        valueMatches = state.matches(value)
      }
    }

    return (not && !valueMatches) || (!not && valueMatches)
  }

  return false
}

export default useMatches
