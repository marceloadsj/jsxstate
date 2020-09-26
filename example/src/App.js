import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import dracula from 'prism-react-renderer/themes/dracula'
import * as Xstate from 'xstate'
import * as jsxstate from 'jsxstate'
import classnames from 'classnames'

import styled from './styled'
import code from './code.js'

// App
const Content = styled('flex flex-col h-screen p-5 space-y-5 bg-gray-900')

export default function App() {
  return (
    <Content>
      <Header />

      <Main />
    </Content>
  )
}

// Header
const HeaderWrapper = styled(
  'flex items-center justify-between flex-shrink-0 h-10 px-5 overflow-hidden bg-gray-800 rounded shadow-md',
  { tag: 'header' }
)

const Title = styled('flex items-center space-x-3')

function Header() {
  return (
    <HeaderWrapper>
      <Title>
        <Logo />

        <a
          href='https://www.npmjs.com/package/jsxstate'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src='https://img.shields.io/npm/v/jsxstate.svg' alt='npm' />
        </a>
      </Title>

      <Aside />
    </HeaderWrapper>
  )
}

// Aside
const AsideWrapper = styled('flex items-center space-x-5', { tag: 'aside' })

function Aside() {
  return (
    <AsideWrapper>
      <MadeWith />

      <GithubLink />
    </AsideWrapper>
  )
}

// Logo
const LogoWrapper = styled('text-xl text-white', { tag: 'h1' })

function Logo() {
  return (
    <LogoWrapper>
      js<span className='font-bold'>xstate</span>
    </LogoWrapper>
  )
}

// MadeWith
const MadeWithWrapper = styled('text-sm text-gray-500')

function MadeWith() {
  return (
    <MadeWithWrapper>
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
    </MadeWithWrapper>
  )
}

// GithubLink
const githubLinkClass =
  'px-2 py-px text-white bg-gray-900 rounded hover:bg-gray-700'

function GithubLink() {
  return (
    <a
      className={githubLinkClass}
      href='https://github.com/marceloadsj/jsxstate'
      rel='noopener noreferrer'
      target='_blank'
    >
      Github Repository
    </a>
  )
}

// Main
const MainWrapper = styled('flex flex-1 space-x-3 overflow-hidden')

function Main() {
  return (
    <MainWrapper>
      <LiveProvider
        scope={{ classnames, ...Xstate, ...jsxstate }}
        theme={dracula}
        noInline
        code={code}
      >
        <Editor />

        <Preview />
      </LiveProvider>
    </MainWrapper>
  )
}

// Editor
const EditorWrapper = styled('flex-1 overflow-scroll')

function Editor() {
  return (
    <EditorWrapper>
      <LiveEditor className='rounded shadow' />
    </EditorWrapper>
  )
}

// Preview
const PreviewWrapper = styled(
  'relative flex justify-center flex-1 p-5 overflow-scroll bg-white rounded shadow'
)

function Preview() {
  return (
    <PreviewWrapper>
      <LiveError className='absolute self-center p-5 text-white bg-red-500 rounded' />

      <LivePreview className='flex-1 w-full' />
    </PreviewWrapper>
  )
}
