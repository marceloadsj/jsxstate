# jsxstate

> Declarative UIs for declarative XState machines

[![NPM](https://img.shields.io/npm/v/jsxstate.svg)](https://www.npmjs.com/package/jsxstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<br/>

### _Please, do not use it in Production until the release of the version 1_

---

<br/>

## Motivation

The main idea of that package is to provide an easy way to write React UIs based on XState machines using components only (or mainly).

---

<br/>

## APIs

You can find each API individually below:

### Components:

[Interpret](https://github.com/marceloadsj/jsxstate/blob/master/src/components/Interpret/api.md)

[Value](https://github.com/marceloadsj/jsxstate/blob/master/src/components/Value/api.md)

[Send](https://github.com/marceloadsj/jsxstate/blob/master/src/components/Send/api.md)

_WIP ..._

### Hooks:

_WIP ..._

---

<br/>

## Install

```bash
npm install jsxstate --save

# or
yarn add jsxstate
```

---

<br/>

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

---

<br/>

## License

MIT © [marceloadsj](https://github.com/marceloadsj)
