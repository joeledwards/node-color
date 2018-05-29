module.exports = pool

function pool (source) {
  if (typeof source === 'function') {
    return generatorPool(source)
  }

  return fixedPool(source)
}

function fixedPool (items) {
  return decorator => {
    const map = {}
    const maxIndex = items.length - 1
    let index = 0

    return value => {
      let decorated = map[value]

      if (!decorated) {
        const item = items[index]
        index = (index < maxIndex) ? (index + 1) : 0
        decorated = decorator(item, value)
        map[value] = decorated
      }

      return decorated
    }
  }
}

function generatorPool (generate) {
  return decorator => {
    const map = {}

    return value => {
      let decorated = map[value]

      if (!decorated) {
        decorated = decorator(generate(), value)
        map[value] = decorated
      }

      return decorated
    }
  }
}
