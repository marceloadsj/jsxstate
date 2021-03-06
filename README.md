<img src="https://raw.githubusercontent.com/marceloadsj/jsxstate/master/logo.png" alt="jsxstate" width="300" height="59" />

### Declarative UIs for declarative XState machines

[![NPM](https://img.shields.io/npm/v/jsxstate.svg)](https://www.npmjs.com/package/jsxstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Travis](https://travis-ci.com/marceloadsj/jsxstate.svg?branch=master)](https://travis-ci.com/marceloadsj/jsxstate.svg?branch=master)

---

## jsxstate - Motivation

The main idea of the library is to provide an easy way to write React UIs based on XState machines using components only (or mainly).
Instead of writing imperactive coding, creating functions to trigger events or creating complex hooks, you can focus in writing components that communicate with your machine, render desired data when a machine state matches and stuffs like that.

---

## Playground

[Try it out on the playground - https://marceloadsj.github.io/jsxstate/](https://marceloadsj.github.io/jsxstate/)

---

## Install

```bash
npm install jsxstate
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
