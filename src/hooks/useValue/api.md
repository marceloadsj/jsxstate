### `useValue`

Works like the _Value_ component so you can access values inside the machine.

---

Check **TUseValue** to see the type/signature of the hook:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Args    | Required | Type          | Default | Description                                      |
| ------- | -------- | ------------- | ------- | ------------------------------------------------ |
| options | no       | TValueOptions |         | options of the hook to apply some specific rules |

| options   | Required | Type   | Default | Description                                                                                   |
| --------- | -------- | ------ | ------- | --------------------------------------------------------------------------------------------- |
| machineId | no       | string |         | targets the machine by the id it was registered on Interpret                                  |
| context   | no       | string |         | points to the context of the machine with [dot notation](https://lodash.com/docs/4.17.15#get) |
| parse     | no       | TParse |         | parses the value before return it                                                             |
| fallback  | no       | any    |         | returns the fallback value if none (undefined) was found                                      |

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
