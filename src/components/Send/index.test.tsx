import React from 'react'
import { screen } from '@testing-library/react'
import { Machine } from 'xstate'

import { render } from '../../../testUtils'
import Interpret from '../Interpret'
import Send from '.'

describe('Send', () => {
  it('is truthy', () => {
    expect(Send).toBeTruthy()
  })

  test('renders the button', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Send data-testid='test'>Test Message</Send>
      </Interpret>
    )

    expect(screen.getByTestId('test').tagName).toBe('BUTTON')
  })

  test('renders the button children', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Send data-testid='test'>Test Message</Send>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders other tags', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Send as='a' data-testid='test'>
          Test Message
        </Send>
      </Interpret>
    )

    expect(screen.getByTestId('test').tagName).toBe('A')
  })

  test('renders even other React components', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    function Children(props) {
      return <div {...props}>Test Message</div>
    }

    render(
      <Interpret machine={testMachine}>
        <Send as={Children} data-testid='test'>
          Test Message
        </Send>
      </Interpret>
    )

    expect(screen.getByTestId('test').tagName).toBe('DIV')
  })

  test('receives enhanced events from string', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    let enhancedEvent

    function Children({ onClick }) {
      enhancedEvent = onClick

      return <div>Test Message</div>
    }

    render(
      <Interpret machine={testMachine}>
        <Send as={Children} onClick='INC'>
          Test Message
        </Send>
      </Interpret>
    )

    expect(enhancedEvent).toBeInstanceOf(Function)
  })

  test('receives enhanced events from object', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    let enhancedEvent

    function Children({ onClick }) {
      enhancedEvent = onClick

      return <div>Test Message</div>
    }

    render(
      <Interpret machine={testMachine}>
        <Send as={Children} onClick={{ type: 'INC' }}>
          Test Message
        </Send>
      </Interpret>
    )

    expect(enhancedEvent).toBeInstanceOf(Function)
  })
})