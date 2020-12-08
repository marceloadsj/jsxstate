import {
  TGetResult,
  TGet,
  TGetEventListener,
  TGetAttributeValue
} from '../types'

const leftRegExp = /[,[\]]+?/
const rightRegExp = /[,[\].]+?/

const getResult: TGetResult = (value, path, regExp) => {
  return path
    .split(regExp)
    .filter(Boolean)
    .reduce((result, key) => result?.[key], value)
}

export const get: TGet = (value, path) => {
  let result = getResult(value, path, leftRegExp)

  if (result === undefined) {
    result = getResult(value, path, rightRegExp)
  }

  return result === value ? undefined : result
}

export const getEventListener: TGetEventListener = ({ state, send, type }) => {
  return async (event) => {
    let parsedType = type

    if (typeof type === 'function') {
      parsedType = await type(event, state, send)
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
