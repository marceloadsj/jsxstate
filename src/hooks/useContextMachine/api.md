### `useContextMachine`

Returns the machine info as **@xstate/react useMachine()**, from the closest _Interpret_ context or by id.

---

| Args | Required | Type   | Default | Description                                                  |
| ---- | -------- | ------ | ------- | ------------------------------------------------------------ |
| id   | no       | string |         | targets the machine by the id it was registered on Interpret |

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

// The default targeted machine will be the closest one
function Child() {
  const [counterState, sendToCounter] = useContextMachine()

  return /* ... */
}
```

```jsx
const userMachine = Machine({ id: 'user' /* ... */ })
const counterMachine = Machine({ id: 'counter' /* ... */ })

function Parent() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <Child />
      </Interpret>
    </Interpret>
  )
}

// You can pass use the first arg as string to target specific machine on the context
function Child() {
  const [userState, sendToUser] = useContextMachine('user')

  return /* ... */
}
```
