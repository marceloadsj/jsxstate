import { SyntheticEvent } from 'react'
import get from 'lodash.get'

import { TState, TSend, TEventType, TAttributeValue } from './types'

type TGetEventListener = (args: {
  state: TState
  send: TSend
  type?: TEventType
  payload?: { [key: string]: any }
}) => (event: SyntheticEvent) => void

export const getEventListener: TGetEventListener = ({
  state,
  send,
  type,
  payload
}) => {
  return (event) => {
    let parsedType

    if (typeof type === 'function') {
      parsedType = type(event, state, send)
    } else {
      parsedType = type
    }

    if (typeof parsedType === 'string') {
      send({ ...event, ...payload, type: parsedType })
    }
  }
}

type IGetAttributeValue = (args: {
  state: TState
  value: TAttributeValue
}) => any

export const getAttributeValue: IGetAttributeValue = ({ state, value }) => {
  if (typeof value === 'string') {
    const parsedValue = get(state.context, value)

    if (parsedValue === undefined) return value

    return parsedValue
  }

  if (typeof value === 'function') {
    return value(state)
  }
}
