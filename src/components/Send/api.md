### `<Send />`

Renders a component enhancing event listeners to send events to the machine or dom attributes to map to machine's context

---

Check **TSendProps** to see the type/signature of the Component:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

| Prop            | Required | Type       | Default | Description                                                      |
| --------------- | -------- | ---------- | ------- | ---------------------------------------------------------------- |
| as              | no       | any        | button  | renders the specific tag, can be even another React component    |
| event listeners | no       | Events     |         | abstracts the creation of the send event direct on those props   |
| dom attributes  | no       | Attributes |         | points a prop to the context of a machine accepting dot notation |
| machineId       | no       | string     |         | targets the machine by the id it was registered on Interpret     |

Check [this file](https://github.com/marceloadsj/jsxstate/blob/master/src/constants/index.tsx) for a complete list of the events and attributes

**Events Listeners:** onClick, onChange, onKeyDown, onSubmit, onMouseDown...

The event listener props are enhanced events that can receive the same values as the **@xstate/react useMachine() send** function.

**DOM Attributes:** value, checked...

The dom attributes props help you creating inputs that points to the machine context directly by its key described as dot notation.

### Examples:

```jsx
const myMachine = Machine({
  context: {
    count: {
      value: 10
    }
  },
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'running'
      }
    },
    running: {
      on: {
        STOP: 'idle'
      }
    }
  },
  on: {
    SET_COUNT: {
      actions: 'setCount'
    }
  }
})

function Component() {
  return (
    <Interpret machine={myMachine}>
      {/* pass the event type to trigger the send onClick */}
      <Send onClick='START'>Start</Send>

      {/* object schema is supported as well so just add other attributes */}
      <Send onClick={{ type: 'START', payload: 10 }}>Start</Send>

      {/* use a function and return the event as string or object */}
      <Send
        onClick={(event) => {
          event.stopPropagation()

          return 'START'
        }}
      >
        Start
      </Send>

      {/* the function can be async */}
      <Send
        onClick={async () => {
          await validateForm()

          return { type: 'SUBMIT' }
        }}
      >
        Start
      </Send>

      {/* the received params can be used to read from state or send events */}
      <Send
        onClick={(event, _state, send) => {
          event.stopPropagation()

          send('START')

          setTimeout(() => {
            send('STOP')
          }, 5000)
        }}
      >
        Start And Stop
      </Send>

      {/* map some props to context by simply passing the dot notation */}
      <Send as='input' type='number' value='count.value' onChange='SET_COUNT' />
    </Interpret>
  )
}
```
