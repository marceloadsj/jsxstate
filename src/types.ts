import { Interpreter, State } from 'xstate'

export type TState = State<any, any, any, any>

export type TSend = Interpreter<any, any, any, any>['send']

export type TUseMachineReturn = [TState, TSend, Interpreter<any, any, any, any>]
