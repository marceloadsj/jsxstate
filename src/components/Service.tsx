import React, { FC } from 'react'
import { useService } from '@xstate/react'

import { TService } from '../types'
import MachineContext from './MachineContext'

type TServiceProps = {
  service: TService
}

const Service: FC<TServiceProps> = ({ service, ...props }) => {
  const value = useService(service)

  return <MachineContext.Provider {...props} value={value} />
}

export default Service
