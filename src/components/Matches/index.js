import useMatches from '../../hooks/useMatches'

export default function Matches({ machineId, context, not, value, children }) {
  const matches = useMatches({ machineId, context, not, value })

  if (matches) return children

  return null
}
