import { Interpreter, State } from 'xstate'
import { ReactNode } from 'react'

export type TState = State<any, any, any, any>

export type TSend = Interpreter<any, any, any, any>['send']

export type TUseMachineReturn = [TState, TSend, Interpreter<any, any, any, any>]

export type TMatchesProps = {
  machineId?: string
  context?: string
  not?: boolean
  value?: string | ((value: any, state: TState) => boolean)
  fallback?: ReactNode
}
