export const lightCode = `
import React from 'react'
import { Interpret, Value } from 'jsxstate'

import lightMachine from './lightMachine'

export default function Light() {
  return (
    <Interpret machine={lightMachine}>
      State: <Value />
      <br />
      Parsed State: <Value parse={(value) => value.toUpperCase()} />
    </Interpret>
  )
}
`

export const lightMachineCode = `
import { Machine } from 'xstate'

export default Machine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      after: { 1000: 'yellow' }
    },
    yellow: {
      after: { 500: 'red' }
    },
    red: {
      after: { 2000: 'green' }
    }
  }
})
`
