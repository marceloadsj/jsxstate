import { useContext } from 'react'

import MachineContext, { Ctx } from '../../components/MachineContext'

export default function useContextMachine(
  id: string | undefined
): Ctx | undefined {
  const allMachines = useContext(MachineContext)

  if (!allMachines) return

  if (!id) return allMachines.ref.current

  if (allMachines[id]) return allMachines[id].current

  return undefined
}
