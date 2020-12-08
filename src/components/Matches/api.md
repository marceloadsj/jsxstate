## `<Matches />`

Validates machine finite (state.value) or infinite (state.context) state and renders the children.

---

Check **TMatchesProps** to see the type/signature of the Component:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Prop      | Required | Type             | Default | Description                                                                                   |
| --------- | -------- | ---------------- | ------- | --------------------------------------------------------------------------------------------- |
| value     | yes      | TMatchesValue    |         | compares the value prop against the state or the context of the machine                       |
| children  | no       | TMatchesChildren |         | renders the components or use a render prop function                                          |
| fallback  | no       | TFallback        | null    | renders the fallback value if the comparison returns false                                    |
| machineId | no       | string           |         | targets the machine by the id it was registered on Interpret                                  |
| context   | no       | string           |         | points to the context of the machine with [dot notation](https://lodash.com/docs/4.17.15#get) |
| not       | no       | boolean          |         | reverses the final comparison to define if the children will be rendered                      |

The default comparison will use triple equal (===) to check between the finite or infinite state and the _value_ provided as a prop.
If the result is true, the children of the component will be rendered, otherwise, the _fallback_ prop. If fallback does not exists, nothing will be rendered.

If children is a render prop, _Matches_ will always run it and render the result, so you have to control the render by yourself.
In that case, the _fallback_ prop is just ignored as you have full control of the boolean.

### Examples:

```jsx
const userMachine = Machine({ id: 'user' /* ... */ })
const loadingMachine = Machine({ id: 'loading' /* ... */ })

function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={loadingMachine}>
        {/* render the message when the state matches */}
        <Matches machineId='user' value='logged'>
          Welcome <Value context='user.name' />!
        </Matches>

        {/* target a context to compare with the match function */}
        <Matches context='user.subscribed' value={false}>
          Please, subscribe to our channel
        </Matches>

        {/* render the fallback when the match returns false */}
        <Matches
          machineId='loading'
          value='idle'
          fallback={<p>The machine is running on a state that is not idle</p>}
        >
          <p>The machine is on an idle state</p>
        </Matches>

        {/* revert the comparison with the not prop: true */}
        <Matches value='logged' not>
          Please, login with your credentials!
        </Matches>
      </Interpret>
    </Interpret>
  )
}
```
