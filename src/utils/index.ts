import { TTravel, TGet, TGetEventListener, TGetAttributeValue } from '../types'

const leftRegExp = /[,[\]]+?/
const rightRegExp = /[,[\].]+?/

const travel: TTravel = (obj, path, regExp) => {
  return String.prototype.split
    .call(path, regExp)
    .filter(Boolean)
    .reduce((result, key) => {
      return result === undefined ? result : result[key]
    }, obj)
}

export const get: TGet = (obj, path, fallback) => {
  let result = travel(obj, path, leftRegExp)

  if (result === undefined) {
    result = travel(obj, path, rightRegExp)
  }

  if (result === undefined || result === obj) return fallback

  return result
}

export const getEventListener: TGetEventListener = ({ state, send, type }) => {
  return (event) => {
    let parsedType = type

    if (typeof type === 'function') {
      parsedType = type(event, state, send)
    }

    if (!parsedType) return

    if (typeof parsedType === 'string') {
      parsedType = { type: parsedType }
    }

    send(parsedType)
  }
}

export const getAttributeValue: TGetAttributeValue = ({ state, value }) => {
  if (typeof value === 'string') {
    const parsedValue = get(state.context, value)

    if (parsedValue === undefined) return value

    return parsedValue
  }

  if (typeof value === 'function') {
    return value(state)
  }
}

export const noop = () => undefined
