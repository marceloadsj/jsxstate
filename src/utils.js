const leftRegExp = /[,[\]]+?/
const rightRegExp = /[,[\].]+?/

function travel(obj, path, regExp) {
  return String.prototype.split
    .call(path, regExp)
    .filter(Boolean)
    .reduce((res, key) => {
      return res === undefined ? res : res[key]
    }, obj)
}

export function get(obj, path) {
  let result = travel(obj, path, leftRegExp)

  if (result === undefined) {
    result = travel(obj, path, rightRegExp)
  }

  if (result !== undefined && result !== obj) return result
}

export function getEventListener({ state, send, type }) {
  return (...args) => {
    let parsedType = type

    if (typeof type === 'function') {
      parsedType = type(...args, state, send)
    }

    if (!parsedType) return

    if (typeof parsedType === 'string') {
      parsedType = { type }
    }

    send({ ...event, ...parsedType })
  }
}

export function getAttributeValue({ state, value }) {
  if (typeof value === 'string') {
    const parsedValue = get(state.context, value)

    if (parsedValue === undefined) return value

    return parsedValue
  }

  if (typeof value === 'function') {
    return value(state)
  }
}
