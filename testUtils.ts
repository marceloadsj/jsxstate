import { FC, ReactElement } from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

const Wrapper: FC = ({ children }) => children as ReactElement

const customRender = (component: ReactElement, options?: any): any => {
  return render(component, { wrapper: Wrapper, ...options })
}

export { customRender as render }
