const chalk = require('chalk')
const emoji = require('./emoji')
const pool = require('./pool')

const defaultColorLevel = 3
const context = { chalk }
function setColorLevel (desiredLevel) {
  const colorLevel = Number(desiredLevel)
  const level = isNaN(colorLevel) ? defaultColorLevel : (colorLevel <= 0) ? 0 : (colorLevel > 3) ? 3 : colorLevel
  context.chalk = new chalk.Instance({ level })
}

setColorLevel(process.env.BUZULI_COLOR_LEVEL)

const light = process.env.BUZULI_COLOR_LIGHT
const dark = process.env.BUZULI_COLOR_DARK

const codeRed = process.env.BUZULI_COLOR_RED || (light ? 'a10' : dark ? 'd43' : 'b21')
const codeOrange = process.env.BUZULI_COLOR_ORANGE || (light ? 'b50' : dark ? 'e83' : 'c61')
const codeYellow = process.env.BUZULI_COLOR_YELLOW || (light ? 'c90' : dark ? 'dc3' : 'ba1')
const codeGreen = process.env.BUZULI_COLOR_GREEN || (light ? '380' : dark ? '6b3' : '491')
const codeBlue = process.env.BUZULI_COLOR_BLUE || (light ? '07a' : dark ? '3ad' : '18b')
const codePurple = process.env.BUZULI_COLOR_PURPLE || (light ? '62c' : dark ? '95f' : '73d')
const codeGrey = process.env.BUZULI_COLOR_GREY || process.env.BUZULI_COLOR_GRAY || (light ? '777' : dark ? 'aaa' : '888')

const red = hex(codeRed)
const orange = hex(codeOrange)
const yellow = hex(codeYellow)
const green = hex(codeGreen)
const blue = hex(codeBlue)
const purple = hex(codePurple)
const gray = hex(codeGrey)
const grey = hex(codeGrey)
const black = hex('000')
const white = hex('fff')

module.exports = {
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
  gray,
  grey,
  black,
  white,
  key,
  hex,
  emoji,
  pool: colorPool,
  setColorLevel
}

function hex (code) {
  const color = context.chalk.hex(code)
  color.bg = context.chalk.bgHex(code)
  return color
}

function key (name) {
  const color = context.chalk.keyword(name)
  color.bg = context.chalk.bgKeyword(name)
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
