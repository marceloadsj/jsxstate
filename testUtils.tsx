import React, { FC, ReactElement } from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { Machine } from 'xstate'

import Interpret from './src/components/Interpret'

const OldWrapper: FC = ({ children }) => children as ReactElement

const customRender = (component: ReactElement, options?: any): any => {
  return render(component, { wrapper: OldWrapper, ...options })
}

function getUserMachine() {
  return Machine({
    id: 'user',
    context: {
      name: 'Marcelo Silva',
      languages: [
        {
          id: 1,
          name: 'Portuguese'
        },
        {
          id: 2,
          name: 'English'
        }
      ]
    },
    initial: 'logged',
    states: {
      logged: {}
    }
  })
}

function getCountMachine() {
  return Machine({
    id: 'count',
    context: {
      value: 0,
      increments: {
        min: [5, 10],
        max: [50, 100]
      }
    },
    initial: 'idle',
    states: {
      idle: {}
    }
  })
}

const Wrapper: FC = ({ children }) => (
  <Interpret machine={getCountMachine()}>
    <Interpret machine={getUserMachine()}>{children}</Interpret>
  </Interpret>
)

function renderWithMachines(ui: ReactElement, options?: any): any {
  return render(ui, { wrapper: Wrapper, ...options })
}

function renderHookWithMachines(
  callback: (props: unknown) => unknown,
  options?: any
): any {
  return renderHook(callback, { wrapper: Wrapper, ...options })
}

export { customRender as render, renderWithMachines, renderHookWithMachines }
