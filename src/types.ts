import { ReactNode } from 'react'
import { StateMachine, Interpreter, State } from 'xstate'

// Xstate
export type TState = State<any, any, any, any>

export type TInterpreter = Interpreter<any, any, any, any>

export type TSend = TInterpreter['send']

// Common
export type TUseMachineReturn = [TState, TSend, TInterpreter]

export type TMatches = {
  value: string | ((value: any, state: TState) => boolean)
  machineId?: string
  context?: string
  not?: boolean
}

export type TChildren =
  | ReactNode
  | ((matches: boolean, state: TState) => ReactNode)

export type TFallback = ReactNode | ((state: TState) => ReactNode)

export type TValue = {
  machineId?: string
  context?: string
  parse?: (value: any, state: TState) => ReactNode
}

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

export type TMatchesProps = TMatches & {
  children?: TChildren
  fallback?: TFallback
}

export type TValueProps = TValue & {
  children?: TChildren
  fallback?: TFallback
}

// Hooks
export type TUseContextMachine = (id?: string) => TUseMachineReturn | undefined

export type TUseMatches = (
  args: TMatches & {
    fallback?: any
  }
) => boolean

export type TSendProps = {
  as?: any
  machineId?: string
  children?: ReactNode
  [key: string]: any
}

export type TUseValue = (
  args: TValue & {
    fallback?: any
  }
) => any
