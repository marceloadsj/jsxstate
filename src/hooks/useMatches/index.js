import { get } from '../../utils'
import useContextMachine from '../useContextMachine'

export default function useMatches({ machineId, context, not, value }) {
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
