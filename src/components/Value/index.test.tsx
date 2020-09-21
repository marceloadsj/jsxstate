import React from 'react'
import { screen } from '@testing-library/react'
import { Machine } from 'xstate'

import { render } from '../../../testUtils'
import Interpret from '../Interpret'
import Value from '.'

describe('Value', () => {
  it('is truthy', () => {
    expect(Value).toBeTruthy()
  })
})

describe('Value children', () => {
  test('renders the children value', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value>{() => 'Test Message'}</Value>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders the children value', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value>{(value: string) => value.toUpperCase()}</Value>
      </Interpret>
    )

    expect(screen.getByText('IDLE')).toBeInTheDocument()
  })
})

describe('Value state', () => {
  test('renders the state value', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value />
      </Interpret>
    )

    expect(screen.getByText('idle')).toBeInTheDocument()
  })
})

describe('Value context', () => {
  test('renders a context value', () => {
    const testMachine = Machine({
      id: 'test',
      context: {
        message: 'Test Message'
      },
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value context='message' />
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders a deep context value', () => {
    const testMachine = Machine({
      id: 'test',
      context: {
        message: {
          errors: [{ text: 'Test Message' }]
        }
      },
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value context='message.errors[0].text' />
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })
})

describe('Value parse', () => {
  test('renders the parsed result', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value parse={() => 'Test Message'} />
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders the parsed state', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value parse={(value) => value.toUpperCase()} />
      </Interpret>
    )

    expect(screen.getByText('IDLE')).toBeInTheDocument()
  })

  test('renders the parsed context', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      context: {
        message: 'test message'
      },
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value context='message' parse={(value) => value.toUpperCase()} />
      </Interpret>
    )

    expect(screen.getByText('TEST MESSAGE')).toBeInTheDocument()
  })

  test('renders the parsed deep context', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      context: {
        message: {
          errors: [{ text: 'Test Message' }]
        }
      },
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value
          context='message.errors[0].text'
          parse={(value) => value.toUpperCase()}
        />
      </Interpret>
    )

    expect(screen.getByText('TEST MESSAGE')).toBeInTheDocument()
  })
})

describe('Value fallback', () => {
  test('renders the fallback', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      context: {},
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Value context='wrong.key' fallback='Test Message' />
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })
})
