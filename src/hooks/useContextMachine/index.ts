import { useContext } from 'react'

import { TUseMachineReturn } from '../../types'
import MachineContext from '../../components/MachineContext'

type TUseContextMachine = (id?: string) => TUseMachineReturn | undefined

const useContextMachine: TUseContextMachine = (id) => {
  const allMachines = useContext(MachineContext)

  if (allMachines) {
    if (!id) return allMachines.ref.current

    if (allMachines[id]) return allMachines[id].current
  }

  return undefined
}

export default useContextMachine
