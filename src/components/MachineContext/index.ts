import { createContext } from 'react'

import { TMachineContext } from '../../types'

const MachineContext = createContext<TMachineContext | undefined>(undefined)

export default MachineContext
