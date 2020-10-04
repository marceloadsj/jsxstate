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
| context   | no       | string                             |         | points to the context of the machine with dot notation       |
| fallback  | no       | any \|\| ((state: TState) => any)  |         | returns the fallback value if none (undefined) was found     |
| machineId | no       | string                             |         | targets the machine by the id it was registered on Interpret |
| parse     | no       | (value: any, state: TState) => any |         | parses the value before return it                            |

### Examples:

```jsx
const authMachine = Machine({
  id: 'auth',
  context: {
    user: {
      name: 'Marcelo Silva'
    }
  },
  initial: 'logged',
  states: {
    guest: {
      on: {
        LOGIN: 'logged'
      }
    },
    logged: {
      on: {
        LOGOUT: 'guest'
      }
    }
  }
})

const counterMachine = Machine({
  id: 'counter',
  context: {
    value: 0,
    increments: [
      {
        min: 1,
        max: 10
      },
      {
        min: 2,
        max: 20
      }
    ]
  },
  initial: 'idle',
  state: {
    idle: {}
  }
})

function Machines() {
  return (
    <Interpret machine={authMachine}>
      <Interpret machine={counterMachine}>
        <Examples />
      </Interpret>
    </Interpret>
  )
}

function Examples() {
  // get the closest machine's state
  const value1 = useValue() // "idle"

  // parse the state before you get it
  const value2 = useValue({
    parse: (value) => value.toUpperCase()
  }) // "IDLE"

  // point to a context value from its key
  const value3 = useValue({ context: 'value' }) // 0

  // use dot notation is supported to read from nested keys
  const value4 = useValue({ context: 'increments[0].min' }) // 1

  // parse the context before return it
  const value5 = useValue({
    context: 'increments[1].max',
    parse: (value) => value * 10
  }) // 200

  // pass a fallback to return when undefined value is found
  const value6 = useValue({
    context: 'non.existend.key',
    fallback: 'Fallback'
  }) // "Fallback"

  // point to another machine by its id
  const value7 = useValue({ machineId: 'auth' }) // "logged"

  return /* ... */
}
```
