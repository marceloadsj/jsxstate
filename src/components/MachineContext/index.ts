import { createContext } from 'react'
import { State, Interpreter } from 'xstate'

// TODO: check if we can make a PR to @xstate/react exposing its types
const MachineContext = createContext<
  | {
      [key: string]: {
        current: [
          State<any, any, any, any>,
          Interpreter<any, any, any, any>['send'],
          Interpreter<any, any, any, any>
        ]
      }
    }
  | undefined
>(undefined)

export default MachineContext
