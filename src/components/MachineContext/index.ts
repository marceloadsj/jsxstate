import { createContext } from 'react'

import { TUseMachineReturn } from '../../types'

type TMachineContext = {
  ref: {
    current: TUseMachineReturn
  }

  [key: string]: {
    current: TUseMachineReturn
  }
}

const MachineContext = createContext<TMachineContext | undefined>(undefined)

export default MachineContext
