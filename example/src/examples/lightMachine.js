import { Machine } from 'xstate'

export default Machine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      after: { 1000: 'yellow' }
    },
    yellow: {
      after: { 500: 'red' }
    },
    red: {
      after: { 2000: 'green' }
    }
  }
})
