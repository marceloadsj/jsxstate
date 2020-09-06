import React from 'react'
import { Interpret, Value } from 'jsxstate'

import lightMachine from './lightMachine'

export default function Light() {
  return (
    <Interpret machine={lightMachine}>
      State: <Value />
      <br />
      Parsed State: <Value parse={(value) => value.toUpperCase()} />
    </Interpret>
  )
}
