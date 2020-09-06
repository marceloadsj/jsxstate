import { get } from '../utils'
import useContextMachine from './useContextMachine'

export default function useValue({ context, parse } = {}) {
  const [state] = useContextMachine() || []

  if (!state) return

  let value

  if (context) {
    if (typeof context === 'string') {
      value = get(state.context, context)
    } else {
      value = state.context
    }
  } else {
    value = state.toStrings().pop()
  }

  if (parse) return parse(value, state)

  return value
}
