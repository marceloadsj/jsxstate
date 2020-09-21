import React, { FC, useRef, useContext } from 'react'
import { useMachine } from '@xstate/react'

import { TInterpretProps } from '../../types'
import MachineContext from '../MachineContext'

const Interpret: FC<TInterpretProps> = ({ machine, options, id, children }) => {
  // Create the current machine with options
  const currentMachine = useMachine(machine, options)

  // The ref will be used to maintain a pointer to access the machine
  const machineRef = useRef(currentMachine)
  machineRef.current = currentMachine

  // We mix the previous machines on the same tree, to access them via machineId
  let value = { ref: machineRef }

  const previousMachine = useContext(MachineContext)

  if (previousMachine) {
    value = { ...previousMachine, ...value }
  }

  // We create a pointer the machine using its own id our the id prop
  const parsedId = id || machine.id

  if (parsedId) {
    if (process.env.NODE_ENV === 'development' && value[parsedId]) {
      console.warn(
        `Machine with id '${parsedId}' already exists in this context, it will not be overwritten. Use the 'id' prop to create a pointer to that specific machine.`
      )
    } else {
      value[parsedId] = machineRef
    }
  }

  // If children is a function, we run it passing down the machine variables
  let parsedChildren = children

  if (typeof children === 'function') {
    parsedChildren = children(...currentMachine)
  }

  return (
    <MachineContext.Provider value={value}>
      {parsedChildren}
    </MachineContext.Provider>
  )
}

export default Interpret
