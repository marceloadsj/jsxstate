import { useContext } from 'react'

import MachineContext from '../../MachineContext'

export default function useContextMachine(id) {
  const allMachines = useContext(MachineContext)

  if (!allMachines) return

  if (!id) return allMachines.ref.current

  if (allMachines[id]) return allMachines[id].current
}
