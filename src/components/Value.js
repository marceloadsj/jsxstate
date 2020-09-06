import useValue from '../hooks/useValue'

export default function Value({ context, parse } = {}) {
  const value = useValue({ context, parse })

  if (value === undefined || value?.toString?.() === '[object Object]') {
    return null
  }

  return value
}
