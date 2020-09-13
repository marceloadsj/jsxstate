### `<Send />`

Renders a tag, as button being the default one, enhancing specific props to trigger events on the machine.

---

| Prop            | Required | Type         | Default | Description                                                                                             |
| --------------- | -------- | ------------ | ------- | ------------------------------------------------------------------------------------------------------- |
| machineId       | no       | string       |         | targets the machine by the id it was registered on Interpret                                            |
| as              | no       | ReactElement | button  | renders the specific tag, can be even another React component                                           |
| event listeners | no       | TType        |         | abstracts the creation of the send event direct on those props                                          |
| dom attributes  | no       | TValue       |         | points a prop to the context of a machine accepting [dot notation](https://lodash.com/docs/4.17.15#get) |

```typescript
type TType =
  | string
  | { [key: string]: any }
  | ((
      event: SyntheticEvent,
      state: TState,
      send: TSend
    ) => void | string | { [key: string]: any })

type TValue = string | ((state: TState) => any)
```

**Events:** onClick, onChange, onKeyDown, onSubmit, onMouseDown...
**Attributes:** value, checked...

Check [this file](https://github.com/marceloadsj/jsxstate/blob/master/src/constants/index.tsx) for a complete list of the events and attributes

The event listener props are enhanced events that can receive the same values as the **@xstate/react useMachine()** second item of the array, aka the send function.
The specific dom attributes, like value, help you creating inputs that points to the machine context directly by its key described as dot notation.

### Examples:

```jsx
const counterMachine = Machine(/* ... */)

// You can pass a the event you want to trigger
function Component() {
  return (
    <Interpret machine={counterMachine}>
      <Send onClick='INC'>Increment</Send>
    </Interpret>
  )
}
```

```jsx
const counterMachine = Machine(/* ... */)

// The event can be an object as well, accepting the payload info
function Component() {
  return (
    <Interpret machine={counterMachine}>
      <Send as='div' onClick={{ type: 'INC', amount: 2 }}>
        Increment
      </Send>
    </Interpret>
  )
}
```

```jsx
const counterMachine = Machine(/* ... */)

// Or it could be a function receiving the DOM event, state and send
function Component() {
  return (
    <Interpret machine={counterMachine}>
      <Send onClick={(event, state, send) => send('INC')}>Increment</Send>
    </Interpret>
  )
}
```

```jsx
// Instead of triggering yourself, you can return the event to be triggered as string or object
function Component() {
  return (
    <Interpret machine={counterMachine}>
      <Send
        onClick={(event, state, send) => {
          return 'INC'
        }}
      >
        Increment
      </Send>
    </Interpret>
  )
}
```

```jsx
const counterMachine = Machine({
  context: {
    incremementAmount: 1
  }

  /* ... */
})

// You can render another tags as well, using another events and pointing some attributes to the context
function Component() {
  return (
    <Interpret machine={counterMachine}>
      <Send
        as='input'
        type='number'
        onChange='INC_VALUE'
        value='incrementAmount'
      />
    </Interpret>
  )
}
```
