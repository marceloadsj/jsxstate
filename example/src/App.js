import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import dracula from 'prism-react-renderer/themes/dracula'
import * as Xstate from 'xstate'
import * as jsxstate from 'jsxstate'

const code = `/*
Components available: Interpret, Send, Value, Matches
Hooks available: useContextMachine, useValue, useMatches
*/

const machine = Machine({
  id: 'light',
  initial: 'green',
  context: {
    steps: 10
  },
  states: {
    green: {
      after: { 2000: 'yellow' }
    },
    yellow: {
      after: { 1000: 'red' }
    },
    red: {
      after: { 3000: 'green' },
      on: {
        WALK: {
          actions: assign({ steps: (context) => Math.max(context.steps - 1, 0) })
        }
      },
    }
  }
})

function Component() {
  return (
    <Interpret machine={machine}>
      Light: <Value />
      <br/>

      Pay attention: <Value parse={(value) => value.toUpperCase()} />
      <br/>

      <p>
        Steps to cross: <Value context="steps" />
      </p>

      <Send
        as="button"
        onClick="WALK"
        className="px-2 py-1 text-white bg-blue-500 rounded"
      >
        Walk
      </Send>
      <br/>

      <Matches context="steps" value={0}>
        You crossed the street!
        <br/>
      </Matches>
      
      <Matches context="steps" value={steps => steps > 0}>
        <Matches value="red">
          You can cross now!
        </Matches>
      </Matches>
    </Interpret>
  )
}

render(Component);`

export default function App() {
  return (
    <LiveProvider
      scope={{ ...Xstate, ...jsxstate }}
      theme={dracula}
      noInline
      code={code}
    >
      <div className='flex h-screen p-3 space-x-3 bg-gray-900'>
        <div className='flex flex-col w-1/2 space-y-3'>
          <div className='flex-1 overflow-y-scroll'>
            <LiveEditor className='rounded shadow' />
          </div>

          <LiveError className='px-1 py-px text-xs text-white bg-red-500 rounded shadow' />
        </div>

        <LivePreview className='flex-1 p-5 bg-white rounded shadow' />
      </div>
    </LiveProvider>
  )
}
