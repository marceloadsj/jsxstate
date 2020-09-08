## `<Interpret />`

<br/>

Starts a XState machine and injects it into a React context to provide it to other components.

---

<br/>

| Prop    | Required | Type         | Default     | Description                                                        |
| ------- | -------- | ------------ | ----------- | ------------------------------------------------------------------ |
| machine | yes      | StateMachine | -           | starts the provided machine and inject it into the context         |
| options | no       | object       | _undefined_ | pass options like the second param of _@xstate/react useMachine()_ |
| id      | no       | string       | machine.id  | uses it instead of the machine.id only for the React context       |

<br/>

Behind the scenes, Interpret uses the _@xstate/react useMachine()_ function to starts the machine.
So, if you have questions about the props, just check the [_@xstate/react_ docs](https://xstate.js.org/docs/packages/xstate-react/#quick-start).

The machine.id, if existent, will be used to generate a unique pointer to that machine in the current React context.
If a machine with the same id already exists in the current React tree branch, the new one will not be injected and a warn on console will trigger.
But, you can pass an id prop to change the pointer of React context, so you can target it using _machineId_ prop of other components.

<br/>

[MachineContext](https://github.com/marceloadsj/jsxstate/blob/master/src/MachineContext/api.md) - Check it for more in deep explanation of how the React context works inside the library

### Examples:

```jsx
const userMachine = Machine({
  id: 'user'
  // ...
})

const counterMachine = Machine({
  id: 'counter'
  // ...
})

// It will send INC event to the closes machine. In that case, counterMachine.
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <Send onClick='INC'>Increment</Send>
      </Interpret>
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine({
  id: 'user'
  // ...
})

const counterMachine = Machine({
  id: 'counter'
  // ...
})

// It will send LOGIN event to the userMachine targeting it by its id
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <Send onClick='LOGIN' machineId='user'>
          Login
        </Send>
      </Interpret>
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine({
  id: 'user'
  // ...
})

// To be able to target different instances of the same machine, you can pass an id to Interpret
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={userMachine} id='friend'>
        <Send onClick='LOGIN' machineId='user'>
          Login
        </Send>

        <Send onClick='FOLLOW' machineId='friend'>
          Follow
        </Send>
      </Interpret>
    </Interpret>
  )
}
```
