import { useContext } from 'react'

import { TUseContextMachine } from '../../types'
import MachineContext from '../../components/MachineContext'

const useContextMachine: TUseContextMachine = (machineId) => {
  const allMachines = useContext(MachineContext)

  if (allMachines) {
    // If no machineId is passed, we use the closest machine
    if (!machineId) return allMachines.ref.current

    // With an machineId, we try to find the specific machine
    if (allMachines[machineId]) return allMachines[machineId].current
  }

  return undefined
}

export default useContextMachine
