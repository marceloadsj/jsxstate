import { useContext } from 'react'

import MachineContext from '../../components/MachineContext'

export default function useContextMachine(id) {
  const allMachines = useContext(MachineContext)

  if (!allMachines) return

  if (!id) return allMachines.ref.current

  if (allMachines[id]) return allMachines[id].current
}
