## `<Value />`

<br/>

A component to render the machine state (state.value) or context (state.context) into the screen.

---

<br/>

| Prop      | Required | Type                      | Default                          | Description                                                 |
| --------- | -------- | ------------------------- | -------------------------------- | ----------------------------------------------------------- |
| context   | no       | string                    | undefined                        | search on the context of the machine with dot notation      |
| parse     | no       | (value, state): ReactNode | undefined                        | parse the value and return what will be rendered            |
| fallback  | no       | ReactNode                 | undefined                        | render the fallback value if no value (undefined) was found |
| machineId | no       | string                    | closest machine on React context | read from another machine on the react tree                 |

<br/>

It do not render anything else appart of that, just a raw content of the machine.

Remember that it should be inside an Interpret to work.

<br/>

### Examples:

```jsx
function Component() {
  return (
    <div>
      <!-- Render the state.value. If it is an object, it will render the string version of it (like "red.walk") -->
      <Value />

      <!-- Render the state.context.messages.error. -->
      <Value context="messages.error" />

      <-- You can read from arrays as well, example of a state.context like { messages: [{ error: "Error Message" }] } -->
      <Value context="messages[0].error" />

      <!-- You receive the state.context.count and the entire state -->
      <Value context="count" parse={(count, state) => count * 2} />

      <!-- Render the fallback when context key was not found -->
      <Value context="not.found" fallback="I will be rendered" />

      <!-- Select another machine from the same React tree as the target -->
      <Value machineId="user" />
    </div>
  );
}
```
