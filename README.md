# jsxstate

> Declarative UIs for declarative XState machines

[![NPM](https://img.shields.io/npm/v/jsxstate.svg)](https://www.npmjs.com/package/jsxstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save jsxstate
```

## Usage

```jsx
import React from 'react'
import { Machine } from 'xstate'
import { Interpret, Value } from 'jsxstate'

const lightMachine = Machine({
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

export default function Light() {
  return (
    <Interpret machine={lightMachine}>
      State: <Value />
      <br />
      Parsed State: <Value parse={(value) => value.toUpperCase()} />
    </Interpret>
  )
}
```

```jsx
import React from 'react'
import { Machine, assign } from 'xstate'
import { Interpret, Value, Send } from 'jsxstate'

const counterMachine = Machine(
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
```

## License

MIT © [marceloadsj](https://github.com/marceloadsj)
