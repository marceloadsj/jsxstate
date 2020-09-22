import { ReactNode, SyntheticEvent } from 'react'
import { StateMachine, Interpreter, State } from 'xstate'

// XState
export type TState = State<any, any, any, any>

export type TInterpreter = Interpreter<any, any, any, any>

export type TSend = TInterpreter['send']

export type TUseMachineReturn = [TState, TSend, TInterpreter]

// Common
export type TObject = { [key: string]: any }

// Shared
export type TMatchesShared = {
  value: string | ((value: any, state: TState) => boolean)
  machineId?: string
  context?: string
  not?: boolean
}

export type TSendShared = {
  machineId?: string
}

export type TValueShared = {
  machineId?: string
  context?: string
  parse?: (value: any, state: TState) => ReactNode
}

// Args
export type TChildrenArg =
  | ReactNode
  | ((matches: boolean, state: TState) => ReactNode)

export type TFallbackArg = ReactNode | ((state: TState) => ReactNode)

export type TEventArg = (event?: SyntheticEvent) => void

export type TTypeArg =
  | string
  | TObject
  | ((
      event: SyntheticEvent | undefined,
      state: TState,
      send: TSend
    ) => void | string | TObject)

export type TValueArg = string | ((state: TState) => any)

// Components
export type TInterpretProps = {
  machine: StateMachine<any, any, any, any>
  options?: any
  id?: string
}

export type TMachineContext = {
  ref: {
    current: TUseMachineReturn
  }

  [key: string]: {
    current: TUseMachineReturn
  }
}

export type TMatchesProps = TMatchesShared & {
  children?: TChildrenArg
  fallback?: TFallbackArg
}

export type TSendProps = TSendShared & {
  as?: any
  children?: ReactNode
  [key: string]: any
}

export type TValueProps = TValueShared & {
  children?: TChildrenArg
  fallback?: TFallbackArg
}

// Hooks
export type TUseContextMachine = (id?: string) => TUseMachineReturn | undefined

export type TUseMatches = (
  args: TMatchesShared & {
    fallback?: any
  }
) => boolean

export type TUseSend = (type: TTypeArg, options?: TSendShared) => TEventArg

export type TUseValue = (
  args: TValueShared & {
    fallback?: any
  }
) => any

// Utilities
export type TTravel = (obj: any, path: string, regExp: RegExp) => any

export type TGet = (obj: any, path: string, fallback?: any) => any

export type TGetEventListener = (args: {
  state: TState
  send: TSend
  type: TTypeArg
}) => TEventArg

export type TGetAttributeValue = (args: {
  state: TState
  value: TValueArg
}) => any
