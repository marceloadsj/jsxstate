import useValue from '../../hooks/useValue'

export default function Value({
  machineId,
  context,
  parse,
  defaultValue
} = {}) {
  const value = useValue({ machineId, context, parse, defaultValue })

  if (value === undefined || value?.toString?.() === '[object Object]') {
    return null
  }

  return value
}
