import { get } from '../../utils'
import useContextMachine from '../useContextMachine'
import { TUseMatches } from '../../types'

const useMatches: TUseMatches = (value, { machineId, context, not } = {}) => {
  const [state] = useContextMachine(machineId) || []

  if (state) {
    let matches

    // Validate with the context prop
    if (context) {
      if (typeof value === 'function') {
        matches = value(get(state.context, context), state)
      } else {
        matches = get(state.context, context) === value
      }

      // Validate the state of the machine
    } else {
      if (typeof value === 'function') {
        matches = value(state.value, state)
      } else {
        matches = state.matches(value)
      }
    }

    // With not prop, we invert the matches boolean
    if (not) {
      matches = !matches
    }

    return matches
  }

  return false
}

export default useMatches
