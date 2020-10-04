import { ReactNode, SyntheticEvent, ReactElement } from 'react'
import { StateMachine, Interpreter, State } from 'xstate'

// XState
export type TState = State<any, any, any, any>
export type TSend = TInterpreter['send']
type TInterpreter = Interpreter<any, any, any, any>
type TUseMachineReturn = [TState, TSend, TInterpreter]

// Common
type TFallback = ReactNode | ((state: TState) => ReactNode)

// Interpret
type TInterpretChildren =
  | ReactNode
  | ((state: TState, send: TSend, service: TInterpreter) => ReactNode)

export type TInterpretProps = {
  children: TInterpretChildren
  machine: StateMachine<any, any, any, any>
  options?: any
  id?: string
}

// MachineContext
export type TMachineContext = {
  ref: {
    current: TUseMachineReturn
  }

  [key: string]: {
    current: TUseMachineReturn
  }
}

// useContextMachine
export type TUseContextMachine = (id?: string) => TUseMachineReturn | undefined

// Matches & useMatches
type TMatchesShared = {
  machineId?: string
  context?: string
  not?: boolean
}

type TMatchesValue = string | ((value: any, state: TState) => boolean)

type TMatchesChildren =
  | ReactNode
  | ((matches: boolean, state: TState) => ReactNode)

export type TMatchesProps = TMatchesShared & {
  value: TMatchesValue
  children?: TMatchesChildren
  fallback?: TFallback
}

export type TUseMatches = (
  value: TMatchesValue,
  options?: TMatchesShared
) => boolean

// Send & useSend
export type TSendProps = {
  as?: any
  children?: ReactNode
  machineId?: string
  [key: string]: any
}

export type TType =
  | string
  | { [key: string]: any }
  | ((
      event: SyntheticEvent | undefined,
      state: TState,
      send: TSend
    ) => undefined | string | { [key: string]: any })

export type TUseSend = (
  type: TType,
  machineId?: string
) => ((event?: SyntheticEvent) => void) | undefined

// Value & useValue
type TValueShared = {
  machineId?: string
  context?: string
}

export type TValueProps = TValueShared & {
  children?: (value: any, state: TState) => ReactNode
  fallback?: ReactNode | ((state: TState) => ReactNode)
}

export type TUseValue = (
  options?: TValueShared & {
    parse?: (value: any, state: TState) => any
    fallback?: any | ((state: TState) => any)
  }
) => any

// Utilities
export type TGetResult = (value: any, path: string, regExp: RegExp) => any

export type TGet = (value: any, path: string) => any

export type TGetEventListener = (args: {
  state: TState
  send: TSend
  type: TType
}) => (event?: SyntheticEvent) => void

export type TGetAttributeValue = (args: {
  state: TState
  value: string | ((state: TState) => any)
}) => any
