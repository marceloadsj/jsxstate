### `useMatches`

Works like the _Matches_ component, but returning a boolean so you can use it imperatively.

---

| Prop      | Required | Type    | Default | Description                                                                                   |
| --------- | -------- | ------- | ------- | --------------------------------------------------------------------------------------------- |
| value     | yes      | TValue  |         | compares the value prop against the state or the context of the machine                       |
| machineId | no       | string  |         | targets the machine by the id it was registered on Interpret                                  |
| context   | no       | string  |         | points to the context of the machine with [dot notation](https://lodash.com/docs/4.17.15#get) |
| not       | no       | boolean |         | reverses the final comparison to return a inverse boolean                                     |
| fallback  | no       | any     |         | returns the fallback value if the comparison returns false                                    |

```typescript
type TValue = string | ((state: TState) => any)
```

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
