const chalk = require('chalk')
const emoji = require('./emoji')

const key = name => chalk.keyword(name)
const hex = code => chalk.hex(code)

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

