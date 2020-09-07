### `<Send />`

<br/>

A component that renders a tag (defaults to div) and enhance some specific props to point to the machine.

---

<br/>

| Prop            | Required | Type         | Default                          | Description                                                                  |
| --------------- | -------- | ------------ | -------------------------------- | ---------------------------------------------------------------------------- |
| as              | no       | ReactNode    | string                           | render the specific tag, can be even another React component                 |
| machineId       | no       | string       | closest machine on React context | read from another machine on the react tree                                  |
| event listeners | no       | eventType    | undefined                        | abstract the creation of the send event direct on those props                |
| dom attributes  | no       | domAttribute | undefined                        | point to the context of a machine, aka state.context, accepting dot notation |

<br/>

`type eventType = string | object | ((event: SyntheticEvent, state: State, send: Send): string | object | void)`

The event listener props like onClick, onChange, onLoad etc are enhanced events that can handle the same api as the @xstate/react useMachine() second return.

`type domAttribute = string | ((state): any)`

The specific dom attributes, like value, checked, help you creating inputs that point to the machine context directly.

<br/>

### Examples:

```jsx
function Component() {
  // on send, you can pass a string or object to trigger an event on the machine
  const [state, send] = useMachine(counterMachine);

  return (
    <div>
      <!-- The listeners act like the send fn -->
      <Send onClick="INC">
        Increment
      </Send>

      <!-- You can pass a function as well, that will receive event, state and send -->
      <Send as="button" onClick={(event, state, send) => send("INC")}>
        Increment
      </Send>

      <!-- If you return a string or object, it will be dispatched as an event -->
      <Send as="button" onClick={(event, state, send) => {
        return "INC";
      }}>
        Increment
      </Send>

      <!-- Create an input that triggers the CHANGE_INPUT event, and the value come from state.context.message.input -->
      <Send as="input" onChange="CHANGE_INPUT" value="message.input" />
    </div>
  );
}
```
