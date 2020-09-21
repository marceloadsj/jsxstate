import { useContext } from 'react'

import { TUseContextMachine } from '../../types'
import MachineContext from '../../components/MachineContext'

const useContextMachine: TUseContextMachine = (id) => {
  const allMachines = useContext(MachineContext)

  if (allMachines) {
    // If no id is passed, we use the closest machine
    if (!id) return allMachines.ref.current

    // With an id, we try to find the specific machine
    if (allMachines[id]) return allMachines[id].current
  }

  return undefined
}

export default useContextMachine
