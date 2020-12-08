## `<Value />`

Renders the machine finite (state.value) or infinite (state.context)

---

Check **TValueProps** to see the type/signature of the Component:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Prop      | Required | Type                                        | Default | Description                                                  |
| --------- | -------- | ------------------------------------------- | ------- | ------------------------------------------------------------ |
| children  | no       | (value: any, state: TState) => ReactNode    |         | parses the value before render it to the screen              |
| context   | no       | string                                      |         | points to the context of the machine with dot notation       |
| fallback  | no       | ReactNode \| ((state: TState) => ReactNode) | null    | renders the fallback value if none (undefined) was found     |
| machineId | no       | string                                      |         | targets the machine by the id it was registered on Interpret |

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

function Examples() {
  return (
    <Interpret machine={authMachine}>
      <Interpret machine={counterMachine}>
        {/* get the closest machine's state being idle */}
        <Value />

        {/* parse the state before you get it to be IDLE */}
        <Value>{(value) => value.toUpperCase()}</Value>

        {/* point to a context value from its key, value as 0 */}
        <Value context='value' />

        {/* use dot notation as it is supported to read from nested keys, value 1 */}
        <Value context='increments[0].min' />

        {/* parse the context before returning it, in this case, 200 */}
        <Value context='increments[1].max'>{(value) => value * 10}</Value>

        {/* pass a fallback to return when undefined value is found */}
        <Value context='non.existend.key' fallback='Fallback' />

        {/* point to another machine by its id, state being logged */}
        <Value machineId='auth' />
      </Interpret>
    </Interpret>
  )
}
```
