### `useSend`

Returns a function to send an event to the machine

---

Check **TUseSend** to see the type/signature of the hook:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Args      | Required | Type   | Default | Description                                                  |
| --------- | -------- | ------ | ------- | ------------------------------------------------------------ |
| type      | yes      | TType  |         | creates a function that sends the configured event           |
| machineId | no       | string |         | targets the machine by the id it was registered on Interpret |

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

// The useSend creates a function to trigger an event
function Child() {
  const inc = useSend('INC')

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

// You can pass down an object to inject a payload
function Child() {
  const inc = useSend({ type: 'INC', value: 10 })

  return /* ... */
}
```
