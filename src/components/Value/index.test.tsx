import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithMachine } from '../../../testUtils'
import Value from '.'
import { TState } from '../../types'

describe('Value', () => {
  it('is truthy', () => {
    expect(Value).toBeTruthy()
  })
})

describe('Value state', () => {
  it('renders the state value', () => {
    renderWithMachine(<Value />)

    expect(screen.getByText('idle')).toBeInTheDocument()
  })
})

describe('Value context', () => {
  it('renders a context value by key', () => {
    renderWithMachine(<Value context='message' />)

    expect(screen.getByText('Context Message')).toBeInTheDocument()
  })

  it('renders a deep context value by key', () => {
    renderWithMachine(<Value context='nested.list[0].message' />)

    expect(screen.getByText('Nested Context Message')).toBeInTheDocument()
  })
})

describe('Value children', () => {
  it('renders the return of children as function', () => {
    renderWithMachine(<Value>{() => 'Children'}</Value>)

    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('renders the parsed return of children as function', () => {
    renderWithMachine(<Value>{(value) => value.toUpperCase()}</Value>)

    expect(screen.getByText('IDLE')).toBeInTheDocument()
  })

  it('renders the parsed context returned of children as function', () => {
    renderWithMachine(
      <Value context='message'>{(value) => value.toUpperCase()}</Value>
    )

    expect(screen.getByText('CONTEXT MESSAGE')).toBeInTheDocument()
  })

  it('renders the parsed deep context returned of children as function', () => {
    renderWithMachine(
      <Value context='nested.list[0].message'>
        {(value) => value.toUpperCase()}
      </Value>
    )

    expect(screen.getByText('NESTED CONTEXT MESSAGE')).toBeInTheDocument()
  })
})

describe('Value fallback', () => {
  it('renders the fallback value when context is undefined', () => {
    renderWithMachine(<Value context='missing' fallback='Fallback' />)

    expect(screen.getByText('Fallback')).toBeInTheDocument()
  })

  it('renders the fallback value when deep context is undefined', () => {
    renderWithMachine(
      <Value context='missing.nested.key' fallback='Fallback' />
    )

    expect(screen.getByText('Fallback')).toBeInTheDocument()
  })

  it('renders the return of fallback as function when context is undefined', () => {
    renderWithMachine(<Value context='missing' fallback={() => 'Fallback'} />)

    expect(screen.getByText('Fallback')).toBeInTheDocument()
  })

  it('renders the return of fallback as function when deep context is undefined', () => {
    renderWithMachine(
      <Value context='missing.deep.key' fallback={() => 'Fallback'} />
    )

    expect(screen.getByText('Fallback')).toBeInTheDocument()
  })

  it('renders the result of fallback as function receiving state as param', () => {
    renderWithMachine(
      <Value
        context='missing.deep.key'
        fallback={(state: TState) => state.value}
      />
    )

    expect(screen.getByText('idle')).toBeInTheDocument()
  })
})
