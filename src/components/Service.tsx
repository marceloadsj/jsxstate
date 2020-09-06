import React, { FC } from 'react'
import { useService } from '@xstate/react'

import { TService } from '../types'
import MachineProvider from './MachineProvider'

type TServiceProps = {
  service: TService
}

const Service: FC<TServiceProps> = ({ service, ...props }) => {
  const value = useService(service)

  return <MachineProvider {...props} value={value} />
}

export default Service
