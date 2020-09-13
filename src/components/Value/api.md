## `<Value />`

Renders the machine finite (state.value) or infinite (state.context) data into the screen.

---

| Prop      | Required | Type      | Description                                                                                      |
| --------- | -------- | --------- | ------------------------------------------------------------------------------------------------ |
| machineId | no       | string    | targets the machine by the id it was registered on Interpret                                     |
| context   | no       | string    | retrieves on the context of the machine with [dot notation](https://lodash.com/docs/4.17.15#get) |
| parse     | no       | TParse    | parses the value and return what will be rendered                                                |
| fallback  | no       | ReactNode | renders the fallback value if none (undefined) was found                                         |

```typescript
type TParse = (value: any, state: TState) => ReactNode
```

It does not render anything else appart of the raw value it finds inside the machine, being the finite or infinite state.
If the infinite state, aka context, is an object, it will not be rendered as well.

### Examples:

```jsx
const userMachine = Machine({ id: 'user' /* ... */ })

// It will render the state.value. If it is an object, it will render the string version of it (like "red.walk")
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Value />
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine({ id: 'user' /* ... */ })

// It will render the state.context.messages.error
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Value context='messages.error' />
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine({
  id: 'user',
  context: {
    messages: [{ error: 'Error Message' }]
  }
  /* ... */
})

// You can read from arrays as well using the following notation
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Value context='messages[0].error' />
    </Interpret>
  )
}
```

```jsx
const counterMachine = Machine({ id: 'counter' /* ... */ })

// You receive the searched value and the entire state as args of parse
function Component() {
  return (
    <Interpret machine={counterMachine}>
      <Value context='count' parse={(count, state) => count * 2} />
    </Interpret>
  )
}
```

```jsx
// To render a fallback if no value is found (undefined), use the fallback prop
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Value context='wrong.key' fallback='I will be rendered' />
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine({ id: 'user' /* ... */ })
const counterMachine = Machine({ id: 'counter' /* ... */ })

// To target another machine on the same React context, use the machineId prop
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <Value machineId='user' />
      </Interpret>
    </Interpret>
  )
}
```
