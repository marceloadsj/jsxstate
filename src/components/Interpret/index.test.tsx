import React, { useContext } from 'react'
import { screen } from '@testing-library/react'
import { Machine } from 'xstate'

import { render } from '../../../testUtils'
import MachineContext from '../../MachineContext'
import Interpret from '.'

describe('Interpret', () => {
  it('is truthy', () => {
    expect(Interpret).toBeTruthy()
  })

  test('shows the children', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    const text = 'Test Message'

    render(<Interpret machine={testMachine}>{text}</Interpret>)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  test('provides the machine', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    let contextMachine

    function Children() {
      const allMachines = useContext(MachineContext)

      if (allMachines) {
        contextMachine = allMachines.ref
      }

      return null
    }

    render(
      <Interpret machine={testMachine}>
        <Children />
      </Interpret>
    )

    expect(contextMachine).not.toBeUndefined()
  })

  test('provides the machine in its right format', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    let contextMachine: any

    function Children() {
      const allMachines = useContext(MachineContext)

      if (allMachines) {
        contextMachine = allMachines.ref
      }

      return null
    }

    render(
      <Interpret machine={testMachine}>
        <Children />
      </Interpret>
    )

    expect(contextMachine).toBeInstanceOf(Object)
    expect(contextMachine.current).toBeInstanceOf(Object)

    expect(contextMachine.current[0]).toBeInstanceOf(Object)
    expect(contextMachine.current[1]).toBeInstanceOf(Function)
    expect(contextMachine.current[2]).toBeInstanceOf(Object)
  })

  test('provides the machine under its id', () => {
    const id = 'test'

    const testMachine = Machine({
      id,
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    let contextMachine

    function Children() {
      const allMachines = useContext(MachineContext)

      if (allMachines) {
        contextMachine = allMachines[id]
      }

      return null
    }

    render(
      <Interpret machine={testMachine}>
        <Children />
      </Interpret>
    )

    expect(contextMachine).not.toBeUndefined()
  })

  test('provides the machine by id as the same of the closes machine', () => {
    const id = 'test'

    const testMachine = Machine({
      id,
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    let contextMachine: any

    function Children() {
      const allMachines = useContext(MachineContext)

      if (allMachines) {
        contextMachine = allMachines
      }

      return null
    }

    render(
      <Interpret machine={testMachine}>
        <Children />
      </Interpret>
    )

    expect(contextMachine.ref === contextMachine[id]).toBe(true)
  })

  test('provides a machine without id', () => {
    const testMachine = Machine({
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    let contextMachine

    function Children() {
      const allMachines = useContext(MachineContext)

      if (allMachines) {
        contextMachine = allMachines.ref
      }

      return null
    }

    render(
      <Interpret machine={testMachine}>
        <Children />
      </Interpret>
    )

    expect(contextMachine).not.toBeUndefined()
  })

  test('provides a machine under another id', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {}
      }
    })

    const id = 'another'
    let contextMachine

    function Children() {
      const allMachines = useContext(MachineContext)

      if (allMachines) {
        contextMachine = allMachines[id]
      }

      return null
    }

    render(
      <Interpret machine={testMachine} id={id}>
        <Children />
      </Interpret>
    )

    expect(contextMachine).not.toBeUndefined()
  })

  test('calls the action', () => {
    const testMachine = Machine({
      id: 'test',
      initial: 'idle',
      states: {
        idle: {
          always: 'running'
        },
        running: {
          entry: 'testAction'
        }
      }
    })

    const options = {
      actions: {
        testAction: jest.fn()
      }
    }

    render(
      <Interpret machine={testMachine} options={options}>
        Test Message
      </Interpret>
    )

    expect(options.actions.testAction).toBeCalled()
  })
})
