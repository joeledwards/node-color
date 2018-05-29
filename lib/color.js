const chalk = require('chalk')
const emoji = require('./emoji')

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

module.exports = {
  red: hex('d43'),
  orange: hex('e83'),
  yellow: hex('dc3'),
  green: hex('6b3'),
  blue: hex('3ad'),
  purple: hex('95f'),
  gray: hex('aaa'),
  grey: hex('aaa'),
  key,
  hex,
  emoji
}
