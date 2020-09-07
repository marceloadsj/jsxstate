import React, { useRef, useContext } from 'react'
import { useMachine } from '@xstate/react'

import MachineContext from '../../MachineContext'
import MachineProvider from '../MachineProvider'

export default function Interpret({ machine, options, id, children }) {
  const currentMachine = useMachine(machine, options)

  const machineRef = useRef()
  machineRef.current = currentMachine

  let value = { ref: machineRef }

  const previousMachine = useContext(MachineContext)

  if (previousMachine) {
    value = { ...previousMachine, ...value }
  }

  const parsedId = id || machine.id

  if (parsedId) {
    if (value[parsedId]) {
      console.warn(
        `Machine with id '${parsedId}' already exists in this context, it will not be overwritten`
      )
    } else {
      value[parsedId] = machineRef
    }
  }

  return <MachineProvider value={value}>{children}</MachineProvider>
}
