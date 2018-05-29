module.exports = pool

function pool (items) {
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
