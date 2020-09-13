import { SyntheticEvent } from 'react'
import { TState, TSend } from '../types'

const leftRegExp = /[,[\]]+?/
const rightRegExp = /[,[\].]+?/

type TTravel = (obj: any, path: string, regExp: RegExp) => any

const travel: TTravel = (obj, path, regExp) => {
  return String.prototype.split
    .call(path, regExp)
    .filter(Boolean)
    .reduce((res, key) => {
      return res === undefined ? res : res[key]
    }, obj)
}

type TGet = (obj: any, path: string, fallback?: any) => any

export const get: TGet = (obj, path, fallback) => {
  let result = travel(obj, path, leftRegExp)

  if (result === undefined) {
    result = travel(obj, path, rightRegExp)
  }

  if (result === undefined || result === obj) return fallback

  return result
}

type TType =
  | string
  | { [key: string]: any }
  | ((
      event: SyntheticEvent,
      state: TState,
      send: TSend
    ) => void | string | { [key: string]: any })

type TGetEventListener = (args: {
  state: TState
  send: TSend
  type: TType
}) => (event: SyntheticEvent) => void

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

    send({ ...event, ...parsedType })
  }
}

type TGetAttributeValue = (args: { state: TState; value: any }) => any | void

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
