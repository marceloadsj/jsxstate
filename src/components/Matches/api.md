## `<Matches />`

Validates machine finite (state.value) or infinite (state.context) state and renders the children.

---

| Prop      | Required | Type      | Default   | Description                                                                                   |
| --------- | -------- | --------- | --------- | --------------------------------------------------------------------------------------------- |
| machineId | no       | string    | undefined | targets the machine by the id it was registered on Interpret                                  |
| value     | no       | TValue    | undefined | compares the value prop against the state or the context of the machine                       |
| context   | no       | string    | undefined | points to the context of the machine with [dot notation](https://lodash.com/docs/4.17.15#get) |
| fallback  | no       | ReactNode | undefined | renders the fallback value if the comparison returns false                                    |
| not       | no       | boolean   | undefined | reverses the final comparison to define if the children will be rendered                      |

`type TValue = any || (value: any, state: State) => ReactNode`

The default comparison will use triple equal (===) to check between the finite or infinite state and the _value_ provided as a prop.
If the result is true, the children of the component will be rendered, otherwise, the _fallback_ prop. If fallback does not exists, nothing will be rendered.

### Examples:

```jsx
const userMachine = Machine(/* ... */)

// If the state.value === "logged", the message will be rendered
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Matches value='logged'>
        Welcome <Value context='user.name' />!
      </Matches>
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine(/* ... */)

// The context prop can be used to target a state.context key
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Matches context='user.subscribed' value={false}>
        Please, subscribe to our channel
      </Matches>
    </Interpret>
  )
}
```

```jsx
const loadingMachine = Machine(/* ... */)

// When
function Component() {
  return (
    <Interpret machine={loadingMachine}>
      <Matches
        value='idle'
        fallback={<p>The machine is running on a state that is not idle</p>}
      >
        <p>The machine is on an idle state</p>
      </Matches>
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine(/* ... */)

// You can use the not prop to revert the comparison
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Matches value='logged' not>
        Please, login with your credentials!
      </Matches>
    </Interpret>
  )
}
```
