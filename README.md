# jsxstate

> Declarative UIs for declarative XState machines

[![NPM](https://img.shields.io/npm/v/jsxstate.svg)](https://www.npmjs.com/package/jsxstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Travis](https://travis-ci.com/marceloadsj/jsxstate.svg?branch=master)](https://travis-ci.com/marceloadsj/jsxstate.svg?branch=master)

### _Please, do not use it in Production until the release of the version 1_

---

## Motivation

The main idea of the library is to provide an easy way to write React UIs based on XState machines using components only (or mainly).
Instead of writing imperactive coding, creating functions to trigger events or creating complex hooks, you can focus in writing components that communicate with your machine, render desired data when a machine state matches and stuffs like that.

---

## Playground

[Try it out on the playground - https://marceloadsj.github.io/jsxstate/](https://marceloadsj.github.io/jsxstate/)

---

## Install

```bash
npm install jsxstate --save
# or
yarn add jsxstate
```

**Peer dependencies:** `react xstate @xstate/react`

---

## APIs

You can find each API individually below:

[Interpret](https://github.com/marceloadsj/jsxstate/blob/master/src/components/Interpret/api.md) - How to start a machine and provide it on React context

[Value](https://github.com/marceloadsj/jsxstate/blob/master/src/components/Value/api.md) - How to render the finite or infinite state of a machine

[Send](https://github.com/marceloadsj/jsxstate/blob/master/src/components/Send/api.md) - How to trigger events on a machine

[Matches](https://github.com/marceloadsj/jsxstate/blob/master/src/components/Matches/api.md) - How to render components based on a finite or infinite state

### Hooks:

[useContextMachine](https://github.com/marceloadsj/jsxstate/blob/master/src/hooks/useContextMachine/api.md) - How to access the machines on the context

[useMatches](https://github.com/marceloadsj/jsxstate/blob/master/src/hooks/useMatches/api.md) - How to get booleans based on finite or infinite state

[useSend](https://github.com/marceloadsj/jsxstate/blob/master/src/hooks/useSend/api.md) - How to get triggers to send events to the machine

[useValue](https://github.com/marceloadsj/jsxstate/blob/master/src/hooks/useValue/api.md) - How to access machine finite or infinite states

### Internals

Those are not exported, but you can read how they works under the hood

[MachineContext](https://github.com/marceloadsj/jsxstate/blob/master/src/components/MachineContext/api.md) - How React context works inside the library

---

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
      Parsed State: <Value>{(value) => value.toUpperCase()}</Value>
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

## Roadmap

Version 1

- [x] Simple playground with editor and real time result
- [x] Basic components (Interpret, Value, Send, Matches)
- [x] Tests for all components
- [x] Documentation for all components
- [x] Targeting machines by configurable id/machineId on components
- [x] Basic hooks (useContextMachine, useValue, useSend, useMatches)
- [ ] Tests for all hooks
- [x] Documentation for all hooks
- [x] Targeting machines by configurable id/machineId on hooks
- [x] Everything written in Typescript (appart of the example/playground)

---

## License

MIT © [marceloadsj](https://github.com/marceloadsj)
