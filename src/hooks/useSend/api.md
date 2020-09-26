### `useSend`

Works like the _Send_ component, but returning a function to send the event.

---

Check **TUseSend** to see the type/signature of the hook:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Args    | Required | Type        | Default | Description                                         |
| ------- | -------- | ----------- | ------- | --------------------------------------------------- |
| event   | yes      | TType       |         | sends the event configured by that argument         |
| options | no       | TSendShared |         | options as an object to configure the hook behavior |

| options   | Required | Type   | Default | Description                                                  |
| --------- | -------- | ------ | ------- | ------------------------------------------------------------ |
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
