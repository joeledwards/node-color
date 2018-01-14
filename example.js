
const {
  red, yellow, blue,
  orange, green, purple,
  gray, hex, key,
  emoji
} = require('./lib/color')

console.log(red('rojo'))
console.log(orange('naraja'))
console.log(yellow('amarillo'))
console.log(green('verde'))
console.log(blue('azul'))
console.log(purple('púrpura'))
console.log(gray('gris'))

console.log(key('orange')('My favorite color'))
console.log(hex('abc')('Surprise me.'))

console.log(green(emoji.inject(':umbrella:  spring :tulip:')))
console.log(yellow(emoji.inject(':palm_tree:  summer :sunny:')))
console.log(orange(emoji.inject(':jack_o_lantern:   fall  :fallen_leaf:')))
console.log(gray(emoji.inject(':snowman:  winter :snowflake:')))

