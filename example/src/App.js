import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import dracula from 'prism-react-renderer/themes/dracula'
import * as Xstate from 'xstate'
import * as jsxstate from 'jsxstate'
import classnames from 'classnames'

import code from './code.js'

export default function App() {
  return (
    <div className='flex flex-col h-screen p-5 space-y-5 bg-gray-900'>
      <header className='flex items-center justify-between flex-shrink-0 h-10 px-5 overflow-hidden bg-gray-800 rounded shadow-md'>
        <div className='flex items-center space-x-3'>
          <h1 className='text-xl text-white'>
            js<span className='font-bold'>xstate</span>
          </h1>

          <div className='px-1 py-px text-xs text-gray-500 bg-gray-900 rounded'>
            v1.0.0
          </div>
        </div>

        <div className='flex items-center space-x-5'>
          <div className='text-sm text-gray-500'>
            Made with{' '}
            <span role='img' aria-label='love'>
              ❤️
            </span>{' '}
            and{' '}
            <span role='img' aria-label='mask on the face'>
              😷
            </span>{' '}
            by{' '}
            <a
              href='https://github.com/marceloadsj'
              rel='noopener noreferrer'
              target='_blank'
              className='underline'
            >
              marceloadsj
            </a>
          </div>

          <a
            className='px-2 py-px text-white bg-gray-900 rounded hover:bg-gray-700'
            href='https://github.com/marceloadsj/jsxstate'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github Repository
          </a>
        </div>
      </header>

      <div className='flex flex-1 space-x-3 overflow-hidden'>
        <LiveProvider
          scope={{ classnames, ...Xstate, ...jsxstate }}
          theme={dracula}
          noInline
          code={code}
        >
          <div className='flex-1 overflow-scroll'>
            <LiveEditor className='rounded shadow' />
          </div>

          <div className='relative flex justify-center flex-1 p-5 overflow-scroll bg-white rounded shadow'>
            <LiveError className='absolute self-center p-5 text-white bg-red-500 rounded' />

            <LivePreview className='flex-1 w-full' />
          </div>
        </LiveProvider>
      </div>
    </div>
  )
}
