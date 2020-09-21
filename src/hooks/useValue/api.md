### `useValue`

Works like the _Value_ component so you can access values inside the machine.

---

| Prop      | Required | Type      | Default | Description                                                                                      |
| --------- | -------- | --------- | ------- | ------------------------------------------------------------------------------------------------ |
| machineId | no       | string    |         | targets the machine by the id it was registered on Interpret                                     |
| context   | no       | string    |         | retrieves on the context of the machine with [dot notation](https://lodash.com/docs/4.17.15#get) |
| parse     | no       | TParse    |         | parses the value before return it                                                                |
| fallback  | no       | TFallback |         | returns the fallback value if none (undefined) was found                                         |

```typescript
type TParse = (value: any, state: TState) => ReactNode

type TFallback = ReactNode | ((state: TState) => ReactNode)
```

### Examples:

```jsx
const counterMachine = Machine(/* ... */)

function Parent() {
  return (
    <Interpret machine={counterMachine}>
      <Child />
    </Interpret>
  )
}

// Current state.value value of the machine
function Child() {
  const currentState = useValue()

  return /* ... */
}
```

```jsx
const counterMachine = Machine(/* ... */)

function Parent() {
  return (
    <Interpret machine={counterMachine}>
      <Child />
    </Interpret>
  )
}

// You can access context value to use it imperatively
function Child() {
  const message = useValue({ context: 'message' })

  return /* ... */
}
```
