import React, { FC, useRef, useContext } from 'react'
import { useMachine } from '@xstate/react'
import { StateMachine } from 'xstate'

import MachineContext from '../MachineContext'

type TInterpretProps = {
  machine: StateMachine<any, any, any, any>
  options?: any
  id?: string
}

const Interpret: FC<TInterpretProps> = ({ machine, options, id, children }) => {
  const currentMachine = useMachine(machine, options)

  const machineRef = useRef(currentMachine)
  machineRef.current = currentMachine

  let value = { ref: machineRef }

  const previousMachine = useContext(MachineContext)

  if (previousMachine) {
    value = { ...previousMachine, ...value }
  }

  const parsedId = id || machine.id

  if (parsedId) {
    if (process.env.NODE_ENV === 'development' && value[parsedId]) {
      console.warn(
        `Machine with id '${parsedId}' already exists in this context, it will not be overwritten`
      )
    } else {
      value[parsedId] = machineRef
    }
  }

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
