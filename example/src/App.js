import React, { useState } from 'react'
import { Route, Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'

import Light from './examples/Light'
import { lightCode, lightMachineCode } from './examples/lightCode'
import Counter from './examples/Counter'
import { counterCode, counterMachineCode } from './examples/counterCode'

export default function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <AppHeader />

      <Route path='/examples'>
        <AppExamples />
      </Route>
    </div>
  )
}

function AppButton({
  className,
  size = 'md',
  variant = 'light',
  to,
  selected,
  external,
  ...props
}) {
  const mergedClass = classnames(
    'bg-transparent border rounded transition duration-150 inline-block text-center',

    variant === 'light' && [
      'border-white text-white hover:bg-white hover:text-gray-800',

      selected && 'bg-white text-gray-800'
    ],

    variant === 'dark' && 'border-gray-900 text-gray-600 hover:bg-gray-900',

    size === 'xs' && 'px-1 text-xs',
    size === 'sm' && 'px-2 py-1 text-sm',
    size === 'md' && 'px-3 py-2',

    className
  )

  if (to) {
    if (external) {
      return (
        <a href={to} rel='noopener nofollow' className={mergedClass} {...props}>
          {props.children || 'Click Here'}
        </a>
      )
    }

    return <Link to={to} className={mergedClass} {...props} />
  }

  return <button className={mergedClass} {...props} />
}

function AppHeader() {
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  return (
    <div
      className={classnames(
        'bg-gray-800 relative flex justify-center',

        isHome ? 'min-h-screen pt-64' : 'pt-16'
      )}
    >
      <div className='fixed top-0 z-10 flex items-center justify-between w-full h-16 px-10 space-x-5 bg-gray-800 border-b border-gray-900'>
        <div className='flex items-center space-x-10'>
          <h1 className='mr-5 text-2xl text-white'>
            <AppTitle />
          </h1>

          <Route path='/:any'>
            <AppButtons size='sm' />
          </Route>
        </div>

        <div className='space-x-3'>
          <AppButton
            to='http://npmjs.com/package/jsxstate'
            external
            size='sm'
            variant='dark'
          >
            NPM
          </AppButton>

          <AppButton to='https://google.com' external size='sm' variant='dark'>
            Github
          </AppButton>
        </div>
      </div>

      <Route path='/' exact>
        <div className='p-10 space-y-10'>
          <div className='text-center text-white'>
            <h1 className='text-5xl'>
              <AppTitle />
            </h1>

            <p>Declarative UIs for declarative XState machines</p>
          </div>

          <AppButtons />
        </div>
      </Route>

      <Route path='/examples'>
        <div className='w-full max-w-screen-md'>
          <h1 className='py-5 text-3xl font-bold text-white'>Examples</h1>
        </div>
      </Route>
    </div>
  )
}

function AppTitle() {
  return (
    <div className='relative inline-block'>
      <span>
        js<span className='font-bold'>xstate</span>
      </span>

      <div className='absolute top-0 right-0 px-1 py-px -mr-10 text-xs text-gray-500 bg-gray-900 rounded'>
        v0.0.1
      </div>
    </div>
  )
}

function AppButtons({ size }) {
  const { pathname } = useLocation()

  return (
    <div className='flex space-x-5'>
      <AppButton
        className='flex-1'
        to='/examples'
        selected={pathname === '/examples'}
        size={size}
      >
        Examples
      </AppButton>

      {/* <AppButton
        className='flex-1'
        selected={pathname === '/documentation'}
        size={size}
      >
        Documentation
      </AppButton> */}
    </div>
  )
}

function AppExamples() {
  return (
    <div className='w-full max-w-screen-md py-10 mx-auto space-y-10'>
      <AppExample
        title='Light Machine'
        description={
          <>
            Wrap your machine with 'Interpret' component to start it
            <br />
            'Value' component can be used to render the state of the machine
            <br />
            You can pass a 'parse' function prop to change it before render
          </>
        }
        code={lightCode}
        machineCode={lightMachineCode}
      >
        <Light />
      </AppExample>

      <AppExample
        title='Counter Machine'
        description={
          <>
            Pass a 'context' prop to value to retrieve data from context
            <br />
            You can use the dot notation to select the key
            <br />
            'Send' is used to trigger events with HTML elements
            <br />
            All default React events accept the string or object notation
          </>
        }
        code={counterCode}
        machineCode={counterMachineCode}
      >
        <Counter />
      </AppExample>
    </div>
  )
}

function AppExample({ children, title, description, code, machineCode }) {
  const [isCodeSelected, setIsCodeSelected] = useState(true)
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className='overflow-hidden border rounded shadow'>
      <div className='flex items-end justify-between px-5 py-3 space-x-3 border-b'>
        <h3 className='text-lg font-bold'>{title}</h3>

        <div className='text-right'>
          <AppButton
            size='xs'
            variant='dark'
            onClick={() => setShowDescription(!showDescription)}
            className='px-1 mt-1 mr-1'
          >
            {showDescription ? 'Show' : 'Hide'} description
          </AppButton>

          {showDescription && (
            <p className='text-sm text-gray-700'>{description}</p>
          )}
        </div>
      </div>

      <div className='p-5'>{children}</div>

      <div className='relative'>
        <AppButton
          size='sm'
          onClick={() => setIsCodeSelected(!isCodeSelected)}
          className='absolute top-0 right-0 px-1 mt-1 mr-1'
        >
          Show {isCodeSelected ? 'Machine' : 'Component'}
        </AppButton>

        <AppHighlight code={isCodeSelected ? code : machineCode} />
      </div>
    </div>
  )
}

function AppHighlight({ code }) {
  return (
    <Highlight {...defaultProps} code={code} language='jsx'>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={classnames(className, 'px-5')} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
