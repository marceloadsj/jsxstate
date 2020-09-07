import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import dracula from 'prism-react-renderer/themes/dracula'

const code = `
function MyComp() {
    return <button>Here</button>
}

render(MyComp);
`

export default function Playground() {
  return (
    <LiveProvider
      theme={dracula}
      noInline
      code={code}
      className='w-full h-full'
    >
      <div className='flex flex-col flex-1'>
        <LiveEditor className='flex-1' />

        <LiveError className='px-1 text-xs text-white bg-red-500' />
      </div>

      <LivePreview className='flex-1' />
    </LiveProvider>
  )
}
