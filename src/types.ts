import { Interpreter, State } from 'xstate'

export type TState = State<any, any, any, any>

export type TSend = Interpreter<any, any, any, any>['send']
