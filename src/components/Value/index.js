import useValue from '../../hooks/useValue'

export default function Value({ machineId, context, parse } = {}) {
  const value = useValue({ machineId, context, parse })

  if (value === undefined || value?.toString?.() === '[object Object]') {
    return null
  }

  return value
}
