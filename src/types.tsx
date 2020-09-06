import { SyntheticEvent } from 'react'
import { State, EventData, Interpreter, StateMachine } from 'xstate'

export type TStateMachine = StateMachine<
  any,
  any,
  any,
  { value: any; context: any }
>

export type TState = State<any, any, any, { value: any; context: any }>
export type TSend = (event: any, payload?: EventData | undefined) => TState
export type TService = Interpreter<any, any, any, any>

export type TUseMachine = [TState, TSend, TService]
export type TCurrentMachine = { current: TUseMachine }

export type TAllMachines = {
  ref: TCurrentMachine
  [key: string]: TCurrentMachine
}

export type TEventType =
  | string
  | ((event: SyntheticEvent, state: TState, send: TSend) => string | void)

export type TAttributeValue =
  | string
  | boolean
  | ((event: SyntheticEvent, state: TState, send: TSend) => any)
  | any

export type TUseSendArgs = { type: string; payload?: any }

export type TUseValueArgs = {
  context?: boolean | string
  parse?: (value: string | any, state: TState) => any
}

export type TUseMatchesArgs = {
  value: string | ((value: string | any, state: TState) => boolean) | any
  context?: string
  not?: boolean
}
