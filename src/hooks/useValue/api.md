### `useValue`

Returns the machine finite (state.value) or infinite (state.context)

---

Check **TUseValue** to see the type/signature of the hook:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Args    | Required | Type   | Default | Description                                      |
| ------- | -------- | ------ | ------- | ------------------------------------------------ |
| options | no       | object |         | options of the hook to apply some specific rules |

| options   | Required | Type                               | Default | Description                                                  |
| --------- | -------- | ---------------------------------- | ------- | ------------------------------------------------------------ |
| machineId | no       | string                             |         | targets the machine by the id it was registered on Interpret |
| context   | no       | string                             |         | points to the context of the machine with dot notation       |
| parse     | no       | (value: any, state: TState) => any |         | parses the value before return it                            |
| fallback  | no       | any \|\| ((state: TState) => any)  |         | returns the fallback value if none (undefined) was found     |

### Examples:

```jsx
const myMachine = Machine({
  id: 'my',
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

const yourMachine = Machine({
  id: 'your',
  initial: 'running',
  state: {
    running: {}
  }
})

function Examples() {
  return (
    <Interpret machine={yourMachine}>
      <Interpret machine={myMachine}>
        <Example1 />

        <Example2 />

        <Example3 />

        <Example4 />

        <Example5 />

        <Example6 />

        <Example7 />

        <Example8 />
      </Interpret>
    </Interpret>
  )
}

// you can get the string of the current state: "idle"
function Example1() {
  const state = useValue()

  /* ... */
}

// you can parse the state before get it: "IDLE"
function Example2() {
  const state = useValue({ parse: (value) => value.toUpperCase() })

  /* ... */
}

// instead of the state, you can point to the context: "Context Message"
function Example3() {
  const state = useValue({ context: 'messages' })

  /* ... */
}

// you can use dot notation to get context values: "Error Message"
function Example4() {
  const state = useValue({ context: 'errors[0].message' })

  /* ... */
}

// and, of course, parse the context before returning it: "ERROR MESSAGE"
function Example5() {
  const state = useValue({
    context: 'errors[0].message',
    parse: (value) => value.toUpperCase()
  })

  /* ... */
}

// a fallback can be passed down to be returned when undefined value is found: "Fallback"
function Example6() {
  const state = useValue({
    context: 'missing.key',
    fallback: 'Fallback'
  })

  /* ... */
}

// with multiple nested machines, you can use machineId to point to the right one: "running" from yourMachine
function Example7() {
  const state = useValue({ machineId: 'your' })

  /* ... */
}

// do not forget, without machineId the closest machine will be used: "idle" from myMachine
function Example8() {
  const state = useValue()

  /* ... */
}
```
