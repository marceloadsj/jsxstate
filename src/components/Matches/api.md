## `<Matches />`

Lorem ipsum

---

| Prop    | Required | Type         | Default    | Description                                                      |
| ------- | -------- | ------------ | ---------- | ---------------------------------------------------------------- |
| machine | yes      | StateMachine |            | start the provided machine and inject into the context           |
| options | no       | object       | undefined  | pass options like the second param of @xstate/react useMachine() |
| id      | no       | string       | machine.id | you can use another id instead of the machine.id                 |

The id of the machine, if existent, will be used to generate a unique pointer in the React context to that machine.

If a machine with the same id already exists, the new one will not be injected, not being able to use machineId to target it.

### Examples:

```jsx
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <!-- It will send INC event to the closes machine, counterMachine -->
        <Send onClick='INC'>Increment</Send>

        <!-- It will send LOGIN event to the userMachine (as it have "user" as id) -->
        <Send onClick='LOGIN' machineId='user'>
          Increment
        </Send>
      </Interpret>

      <!-- When we need to render the same machine on the same tree. To be able to target it using machineId, we need to pass a different id to Interpret -->
      <Interpret machine={userMachine} id='friend'>
        <!-- ... -->
      </Interpret>
    </Interpret>
  );
}
```
