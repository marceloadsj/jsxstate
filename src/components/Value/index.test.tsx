import React from 'react'
import { render, screen } from '@testing-library/react'

import { renderWithMachines } from '../../../testUtils'
import Value from '.'
import { TState } from '../../types'

describe('Value', () => {
  it('is truthy', () => {
    expect(Value).toBeTruthy()
  })

  it('throws error when used with no context provided', () => {
    expect(() => render(<Value />)).toThrowError()
  })

  it('throws error when used with no context for machineId provided', () => {
    expect(() => {
      renderWithMachines(<Value machineId='missing' />)
    }).toThrowError()
  })
})

describe('Value state', () => {
  it('renders the state value', () => {
    renderWithMachines(<Value />)

    expect(screen.getByText('logged')).toBeInTheDocument()
  })

  it('renders the state value with machineId', () => {
    renderWithMachines(<Value machineId='count' />)

    expect(screen.getByText('idle')).toBeInTheDocument()
  })
})

describe('Value context', () => {
  it('renders a context value by key', () => {
    renderWithMachines(<Value context='name' />)

    expect(screen.getByText('Marcelo Silva')).toBeInTheDocument()
  })

  it('renders a context value by key with machineId', () => {
    renderWithMachines(<Value context='value' machineId='count' />)

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders a deep context value by key', () => {
    renderWithMachines(<Value context='languages[0].name' />)

    expect(screen.getByText('Portuguese')).toBeInTheDocument()
  })

  it('renders a deep context value by key with machineId', () => {
    renderWithMachines(<Value context='increments.min[0]' machineId='count' />)

    expect(screen.getByText('5')).toBeInTheDocument()
  })
})

describe('Value children', () => {
  it('renders the return of children as function', () => {
    renderWithMachines(<Value>{() => 'Ignoring any value'}</Value>)

    expect(screen.getByText('Ignoring any value')).toBeInTheDocument()
  })

  it('renders the parsed return of children as function', () => {
    renderWithMachines(<Value>{(value) => value.toUpperCase()}</Value>)

    expect(screen.getByText('LOGGED')).toBeInTheDocument()
  })

  it('renders the parsed return of children as function with machineId', () => {
    renderWithMachines(
      <Value machineId='count'>{(value) => value.toUpperCase()}</Value>
    )

    expect(screen.getByText('IDLE')).toBeInTheDocument()
  })

  it('renders the parsed context returned of children as function', () => {
    renderWithMachines(
      <Value context='name'>{(value) => value.toUpperCase()}</Value>
    )

    expect(screen.getByText('MARCELO SILVA')).toBeInTheDocument()
  })

  it('renders the parsed context returned of children as function with machineId', () => {
    renderWithMachines(
      <Value context='value' machineId='count'>
        {(value) => value + 20}
      </Value>
    )

    expect(screen.getByText('20')).toBeInTheDocument()
  })

  it('renders the parsed deep context returned of children as function', () => {
    renderWithMachines(
      <Value context='languages[1].name'>
        {(value) => value.toUpperCase()}
      </Value>
    )

    expect(screen.getByText('ENGLISH')).toBeInTheDocument()
  })

  it('renders the parsed deep context returned of children as function with machineId', () => {
    renderWithMachines(
      <Value context='increments.max[1]' machineId='count'>
        {(value) => value * 5}
      </Value>
    )

    expect(screen.getByText('500')).toBeInTheDocument()
  })
})

describe('Value fallback', () => {
  it('renders the fallback value when context is undefined', () => {
    renderWithMachines(
      <Value context='age' fallback='No field with key age on user machine' />
    )

    expect(
      screen.getByText('No field with key age on user machine')
    ).toBeInTheDocument()
  })

  it('renders the fallback value when context is undefined', () => {
    renderWithMachines(
      <Value
        context='maximum'
        fallback='No field with key maximum on user machine'
        machineId='count'
      />
    )

    expect(
      screen.getByText('No field with key maximum on user machine')
    ).toBeInTheDocument()
  })

  it('renders the return of fallback as function when context is undefined', () => {
    renderWithMachines(
      <Value context='age' fallback={() => 'No age field on user machine'} />
    )

    expect(screen.getByText('No age field on user machine')).toBeInTheDocument()
  })

  it('renders the result of fallback as function receiving state as param', () => {
    renderWithMachines(
      <Value
        context='dateOfBirth.day'
        fallback={(state: TState) => state.value}
      />
    )

    expect(screen.getByText('logged')).toBeInTheDocument()
  })

  it('renders the result of fallback as function receiving state as param', () => {
    renderWithMachines(
      <Value
        context='values.skip'
        fallback={(state: TState) => state.value}
        machineId='count'
      />
    )

    expect(screen.getByText('idle')).toBeInTheDocument()
  })
})
