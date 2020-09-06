export const counterCode = `
import React from 'react'
import { Interpret, Value, Send } from 'jsxstate'

import counterMachine from './counterMachine'

export default function Counter() {
  return (
    <Interpret machine={counterMachine}>
      <p>
        <Value context='count' /> <Value context='messages.description' />
      </p>

      <Send as='button' onClick='INC'>
        +
      </Send>

      <Send as='button' onClick={{ type: 'DEC' }}>
        -
      </Send>
    </Interpret>
  )
}
`

export const counterMachineCode = `
import { Machine, assign } from 'xstate'

export default Machine(
  {
    id: 'counter',
    initial: 'active',
    context: {
      count: 0,
      messages: { description: 'until now' }
    },
    states: {
      active: {
        on: {
          INC: { actions: 'increment' },
          DEC: { actions: 'decrement' }
        }
      }
    }
  },
  {
    actions: {
      increment: assign({ count: (context) => context.count + 1 }),
      decrement: assign({ count: (context) => context.count - 1 })
    }
  }
)
`
