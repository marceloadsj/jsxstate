import React from 'react'
import { screen } from '@testing-library/react'
import { Machine } from 'xstate'

import { render } from '../../../testUtils'
import Interpret from '../Interpret'
import Matches from '.'

describe('Matches', () => {
  it('is truthy', () => {
    expect(Matches).toBeTruthy()
  })

  test('renders as the state matches', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Matches value='idle'>Test Message</Matches>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders as the context matches', () => {
    const testMachine = Machine({
      id: 'test',
      context: {
        key: 'test'
      },
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Matches context='key' value='test'>
          Test Message
        </Matches>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders as deep context matches', () => {
    const testMachine = Machine({
      id: 'test',
      context: {
        messages: {
          key: 'test'
        }
      },
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Matches context='messages.key' value='test'>
          Test Message
        </Matches>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('does not render as the state is different', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'running',
      states: {
        idle: {},
        running: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <div data-testid='test'>
          <Matches value='idle'>Test Message</Matches>
        </div>
      </Interpret>
    )

    expect(screen.getByTestId('test')).toBeEmptyDOMElement()
  })

  test('does not render as the context is different', () => {
    const testMachine = Machine({
      id: 'test',
      context: {
        key: 'test'
      },
      initial: 'running',
      states: {
        idle: {},
        running: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <div data-testid='test'>
          <Matches context='key' value='wrong'>
            Test Message
          </Matches>
        </div>
      </Interpret>
    )

    expect(screen.getByTestId('test')).toBeEmptyDOMElement()
  })

  test('renders with not inverting comparison', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'running',
      states: {
        idle: {},
        running: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Matches not value='idle'>
          Test Message
        </Matches>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders with not inverting comparison with context', () => {
    const testMachine = Machine({
      id: 'test',
      context: {
        key: 'test'
      },
      initial: 'running',
      states: {
        idle: {},
        running: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Matches context='key' not value='wrong'>
          Test Message
        </Matches>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('does not render inverting comparison', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <div data-testid='test'>
          <Matches not value='idle'>
            Test Message
          </Matches>
        </div>
      </Interpret>
    )

    expect(screen.getByTestId('test')).toBeEmptyDOMElement()
  })

  test('does not render inverting comparison with context', () => {
    const testMachine = Machine({
      id: 'test',
      context: {
        key: 'test'
      },
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <div data-testid='test'>
          <Matches context='key' not value='test'>
            Test Message
          </Matches>
        </div>
      </Interpret>
    )

    expect(screen.getByTestId('test')).toBeEmptyDOMElement()
  })

  test('renders the fallback', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'running',
      states: {
        idle: {},
        running: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Matches value='idle' fallback='Test Message'>
          Wrong Message
        </Matches>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders the fallback with not', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Matches not value='idle' fallback='Test Message'>
          Wrong Message
        </Matches>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('renders with value as function', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <Matches value={() => true}>Test Message</Matches>
      </Interpret>
    )

    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  test('does not render with value as function', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    render(
      <Interpret machine={testMachine}>
        <div data-testid='test'>
          <Matches value={() => false}>Test Message</Matches>
        </div>
      </Interpret>
    )

    expect(screen.getByTestId('test')).toBeEmptyDOMElement()
  })
})
