import { get } from '../../utils'
import useContextMachine from '../useContextMachine'
import { TUseValue } from '../../types'

const useValue: TUseValue = ({ machineId, context, parse, fallback } = {}) => {
  const [state] = useContextMachine(machineId) || []

  // If no state is found, we simply return undefined
  if (!state) return

  let value

  if (context) {
    if (typeof context === 'string') {
      value = get(state.context, context, fallback)
    } else {
      value = state.context
    }
  } else {
    value = state.toStrings().pop()
  }

  if (parse) return parse(value, state)

  return value
}

export default useValue
