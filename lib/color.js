const chalk = require('chalk')
const emoji = require('./emoji')
const pool = require('./pool')

const red = hex('d43')
const orange = hex('e83')
const yellow = hex('dc3')
const green = hex('6b3')
const blue = hex('3ad')
const purple = hex('95f')
const gray = hex('aaa')
const grey = hex('aaa')

module.exports = {
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
  gray,
  grey,
  key,
  hex,
  emoji,
  pool: colorPool
}

function hex (code) {
  const color = chalk.hex(code)
  color.bg = chalk.bgHex(code)
  return color
}

function key (name) {
  const color = chalk.keyword(name)
  color.bg = chalk.bgKeyword(name)
  return color
}

const poolColors = [
  yellow,
  blue,
  red,
  green,
  orange,
  purple
]

function colorPool () {
  return pool(poolColors)((color, value) => color(value))
}
