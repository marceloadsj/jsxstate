import { createContext } from 'react'
import { Interpreter } from 'xstate'

import { TState, TSend } from '../../types'

export interface IMachineCtx {
  [key: string]: {
    current: Ctx
  }
}

// TODO: check if we can make a PR to @xstate/react exposing its types
export type Ctx = [TState, TSend, Interpreter<any, any, any, any>]

const MachineContext = createContext<IMachineCtx | undefined>(undefined)

export default MachineContext
