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

function getMachine() {
  return Machine({
    id: 'test',
    context: {
      message: 'Context Message',
      nested: {
        list: [
          {
            message: 'Nested Context Message'
          }
        ]
      }
    },
    initial: 'idle',
    states: {
      idle: {}
    }
  })
}

const Wrapper: FC = ({ children }) => (
  <Interpret machine={getMachine()}>{children}</Interpret>
)

function renderWithMachine(ui: ReactElement, options?: any): any {
  return render(ui, { wrapper: Wrapper, ...options })
}

function renderHookWithMachine(
  callback: (props: unknown) => unknown,
  options?: any
): any {
  return renderHook(callback, { wrapper: Wrapper, ...options })
}

export { customRender as render, renderWithMachine, renderHookWithMachine }
