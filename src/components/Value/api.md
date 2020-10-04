## `<Value />`

Renders the machine finite (state.value) or infinite (state.context)

---

Check **TValueProps** to see the type/signature of the Component:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Prop      | Required | Type                                          | Default | Description                                                  |
| --------- | -------- | --------------------------------------------- | ------- | ------------------------------------------------------------ |
| children  | no       | (value: any, state: TState) => ReactNode      |         | parses the value before render it to the screen              |
| context   | no       | string                                        |         | points to the context of the machine with dot notation       |
| fallback  | no       | ReactNode \|\| ((state: TState) => ReactNode) | null    | renders the fallback value if none (undefined) was found     |
| machineId | no       | string                                        |         | targets the machine by the id it was registered on Interpret |

### Examples:

```jsx
const myMachine = Machine({
  context: {
    message: 'Context Message',
    errors: [
      {
        message: 'Error Message'
      }
    ]
  },
  initial: 'idle',
  states: {
    idle: {}
  }
})

// you can render the string of the current state: "idle"
function Example1() {
  return (
    <Interpret machine={myMachine}>
      <Value />
    </Interpret>
  )
}

// you can parse the state before render it: "IDLE"
function Example2() {
  return (
    <Interpret machine={myMachine}>
      <Value>{(value) => value.toUpperCase()}</Value>
    </Interpret>
  )
}

// instead of the state, you can point to the context: "Context Message"
function Example3() {
  return (
    <Interpret machine={myMachine}>
      <Value context='messages' />
    </Interpret>
  )
}

// you can use dot notation to get context values: "Error Message"
function Example4() {
  return (
    <Interpret machine={myMachine}>
      <Value context='errors[0].message' />
    </Interpret>
  )
}

// and, of course, parse the context before showing on the screen: "ERROR MESSAGE"
function Example5() {
  return (
    <Interpret machine={myMachine}>
      <Value context='errors[0].message'>
        {(value) => value.toUpperCase()}
      </Value>
    </Interpret>
  )
}

// a fallback can be passed down to be rendered when undefined value is found: "Fallback"
function Example6() {
  return (
    <Interpret machine={myMachine}>
      <Value context='missing.key' fallback='Fallback' />
    </Interpret>
  )
}

// with multiple nested machines, you can use machineId to point to the right one: "running" from yourMachine
const yourMachine = Machine({
  id: 'your',
  initial: 'running',
  state: {
    running: {}
  }
})

function Example7() {
  return (
    <Interpret machine={yourMachine}>
      <Interpret machine={myMachine}>
        <Value machineId='your' />
      </Interpret>
    </Interpret>
  )
}

// do not forget, without machineId the closest machine will be used: "idle" from myMachine
function Example8() {
  return (
    <Interpret machine={yourMachine}>
      <Interpret machine={myMachine}>
        <Value />
      </Interpret>
    </Interpret>
  )
}
```
