import { get } from '../../utils'
import useContextMachine from '../useContextMachine'
import { TMatchesProps } from '../../types'

type TUseMatchesArgs = Partial<TMatchesProps> & {
  fallback?: any
}

type TUseMatches = (args: TUseMatchesArgs) => boolean

const useMatches: TUseMatches = ({ machineId, context, not, value }) => {
  const [state] = useContextMachine(machineId) || []

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
