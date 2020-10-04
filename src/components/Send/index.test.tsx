import React, { FC } from 'react'
import { screen } from '@testing-library/react'

import { renderWithMachines } from '../../../testUtils'
import Send from '.'

describe('Send', () => {
  it('is truthy', () => {
    expect(Send).toBeTruthy()
  })
})

describe('Send events', () => {
  it('returns enhanced handler from event as string', () => {
    const Button: FC<any> = ({ onClick }) => {
      expect(onClick).toBeInstanceOf(Function)

      return null
    }

    renderWithMachines(<Send as={Button} onClick='LOGOUT' />)
  })

  it('returns enhanced handler from event as string with machineId', () => {
    const Button: FC<any> = ({ onClick }) => {
      expect(onClick).toBeInstanceOf(Function)

      return null
    }

    renderWithMachines(
      <Send as={Button} onClick='INCREMENT' machineId='count' />
    )
  })

  it('returns enhanced handler from event as object', () => {
    const Button: FC<any> = ({ onClick }) => {
      expect(onClick).toBeInstanceOf(Function)

      return null
    }

    renderWithMachines(<Send as={Button} onClick={{ type: 'LOGOUT' }} />)
  })

  it('returns enhanced handler from event as object with machineId', () => {
    const Button: FC<any> = ({ onClick }) => {
      expect(onClick).toBeInstanceOf(Function)

      return null
    }

    renderWithMachines(
      <Send as={Button} onClick={{ type: 'INCREMENT' }} machineId='count' />
    )
  })
})

describe('Send attributes', () => {
  it('returns enhanced value from context with attribute as string', () => {
    const Button: FC<{ value: string }> = ({ value }) => {
      expect(value).toBe('Marcelo Silva')

      return null
    }

    renderWithMachines(<Send as={Button} value='name' />)
  })

  it('returns enhanced value from context with attribute as string with machineId', () => {
    const Button: FC<{ value: string }> = ({ value }) => {
      expect(value).toBe(0)

      return null
    }

    renderWithMachines(<Send as={Button} value='value' machineId='count' />)
  })

  it('returns enhanced value from deep context with attribute as string', () => {
    const Button: FC<{ value: string }> = ({ value }) => {
      expect(value).toBe(1)

      return null
    }

    renderWithMachines(<Send as={Button} value='languages[0].id' />)
  })

  it('returns enhanced value from deep context with attribute as string with machineId', () => {
    const Button: FC<{ value: string }> = ({ value }) => {
      expect(value).toBe(10)

      return null
    }

    renderWithMachines(
      <Send as={Button} value='increments.min[1]' machineId='count' />
    )
  })
})

describe('Send children', () => {
  it('renders children', () => {
    renderWithMachines(<Send data-testid='test'>Click Me</Send>)

    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('renders children with custom as', () => {
    renderWithMachines(
      <Send as='div' data-testid='test'>
        Clickable Box
      </Send>
    )

    expect(screen.getByText('Clickable Box')).toBeInTheDocument()
  })
})

describe('Send as', () => {
  it('renders default tag as button', () => {
    renderWithMachines(<Send data-testid='test' />)

    expect(screen.getByTestId('test').tagName).toBe('BUTTON')
  })

  it('renders custom tag', () => {
    renderWithMachines(<Send as='span' data-testid='test' />)

    expect(screen.getByTestId('test').tagName).toBe('SPAN')
  })

  it('renders react component', () => {
    const Div: FC = () => <div data-testid='test' />

    renderWithMachines(<Send as={Div} data-testid='test' />)

    expect(screen.getByTestId('test').tagName).toBe('DIV')
  })
})
