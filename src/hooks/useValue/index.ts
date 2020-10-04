import { get } from '../../utils'
import useContextMachine from '../useContextMachine'
import { TUseValue } from '../../types'

const useValue: TUseValue = ({ machineId, context, parse, fallback } = {}) => {
  const [state] = useContextMachine(machineId) || []

  if (!state) {
    throw new Error(
      machineId
        ? `The useValue hook/Value component should be used on a component below an Interpret context with machine with id as ${machineId}`
        : 'The useValue hook/Value component should be used on a component below an Interpret context'
    )
  }

  let value = state.value

  if (context) {
    // string context key uses the dot notation to get the value
    if (typeof context === 'string') {
      value = get(state.context, context)
    } else {
      // truthy context returns the entire context object
      value = state.context
    }
  }

  if (parse) return parse(value, state)

  if (value === undefined) {
    // runs fallback function to return it
    if (typeof fallback === 'function') {
      return fallback(state)
    }

    return fallback
  }

  return value
}

export default useValue
