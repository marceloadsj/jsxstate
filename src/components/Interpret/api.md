## `<Interpret />`

Starts an XState machine and injects it into a React context to provide it to other components.

---

Check **TInterpretProps** to see the type/signature of the Component:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Prop      | Required | Type               | Default    | Description                                                             |
| --------- | -------- | ------------------ | ---------- | ----------------------------------------------------------------------- |
| children  | yes      | TInterpretChildren |            | renders the component tree or use a render prop function                |
| machine   | yes      | StateMachine       |            | starts the provided machine and injects it into the context             |
| options   | no       | object             |            | adds options like the second argument of **@xstate/react useMachine()** |
| machineId | no       | string             | machine.id | uses it instead of the _machine.id_ only for the React context          |

Behind the scenes, _Interpret_ uses the **@xstate/react useMachine()** function to starts the machine.
So, if you have questions about these props, just check the [**@xstate/react** docs](https://xstate.js.org/docs/packages/xstate-react/#quick-start).

The _machine.id_, if existent, will be used to generate a unique pointer to that machine in the current React context.
If a machine with the same id already exists in the current React tree branch, the new one will not be injected and a warn on console will trigger.
But, you can pass an _machineId_ prop to change the pointer of React context, so you can target it using _machineId_ of other components or hooks.

[MachineContext](https://github.com/marceloadsj/jsxstate/blob/master/src/components/MachineContext/api.md) - Check it for a more in deep explanation of how the React context works inside the library

### Examples:

```jsx
const userMachine = Machine({ id: 'user' /* ... */ })
const counterMachine = Machine({ id: 'counter' /* ... */ })

function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={userMachine} machineId='friend'>
        <Interpret machine={counterMachine}>
          {/* send INC event to the closest machine, the counterMachine */}
          <Send onClick='INC'>Increment</Send>

          {/* send LOGIN event targeting the machine by id, userMachine */}
          <Send onClick='LOGIN' machineId='user'>
            Login
          </Send>

          {/* targets different instances of the same machine by its machineId on Interpret */}
          <Send onClick='FOLLOW' machineId='friend'>
            Follow
          </Send>
        </Interpret>
      </Interpret>
    </Interpret>
  )
}
```
