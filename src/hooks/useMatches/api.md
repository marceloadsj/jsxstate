### `useMatches`

Works like the **Matches** component, but returning a boolean instead of rendering the children.

---

| Prop      | Required | Type    | Description                                                                                   |
| --------- | -------- | ------- | --------------------------------------------------------------------------------------------- |
| machineId | no       | string  | targets the machine by the id it was registered on Interpret                                  |
| value     | no       | TValue  | compares the value prop against the state or the context of the machine                       |
| context   | no       | string  | points to the context of the machine with [dot notation](https://lodash.com/docs/4.17.15#get) |
| fallback  | no       | any     | returns the fallback value if the comparison returns false                                    |
| not       | no       | boolean | reverses the final comparison to return a inverse boolean                                     |

### Examples:

```jsx
const counterMachine = Machine({
  initial: 'idle',
  states: {
    idle: {}
  }
  /* ... */
})

function Parent() {
  return (
    <Interpret machine={counterMachine}>
      <Child />
    </Interpret>
  )
}

// Boolean of state.value === "idle"
function Child() {
  const isIdle = useMatches({ value: 'idle' })

  return /* ... */
}
```

```jsx
const userMachine = Machine(/* ... */)

function Parent() {
  return (
    <Interpret machine={counterMachine}>
      <Child />
    </Interpret>
  )
}

// The context prop can be used to target a state.context key
function Child() {
  const isSubscribed = useMatches({
    context: 'user.subscribed',
    value: true
  })

  return /* ... */
}
```
