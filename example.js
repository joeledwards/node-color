
const {
  red, yellow, blue,
  orange, green, purple,
  gray, black, white,
  hex, key,
  emoji, pool
} = require('./lib/color')

console.log(red('rojo'))
console.log(orange('naraja'))
console.log(yellow('amarillo'))
console.log(green('verde'))
console.log(blue('azul'))
console.log(purple('púrpura'))
console.log(gray('gris'))

console.log(red.bg(black('rojo')))
console.log(orange.bg(black('naraja')))
console.log(yellow.bg(black('amarillo')))
console.log(green.bg(black('verde')))
console.log(blue.bg(black('azul')))
console.log(purple.bg(black('púrpura')))
console.log(gray.bg(black('gris')))
console.log(white.bg(black('blanco')))
console.log(black.bg(white('negro')))

console.log(key('orange').bold('My favorite color'))
console.log(hex('abc').bold('Surprise me.'))

console.log(key('orange').bg(black.bold('My favorite color')))
console.log(hex('abc').bg(black.bold('Surprise me.')))

console.log(green(emoji.inject(':umbrella:  spring :tulip:')))
console.log(yellow(emoji.inject(':palm_tree:  summer :sunny:')))
console.log(orange(emoji.inject(':jack_o_lantern:   fall  :fallen_leaf:')))
console.log(gray(emoji.inject(':snowman:  winter :snowflake:')))

console.log(emoji.key('x'))
console.log(emoji.key('white_check_mark'))

const colorPool = pool()
console.log(colorPool('pooled-a'))
console.log(colorPool('pooled-b'))
console.log(colorPool('pooled-c'))
console.log(colorPool('pooled-d'))
console.log(colorPool('pooled-e'))
console.log(colorPool('pooled-f'))
console.log(colorPool('pooled-g'))
console.log(colorPool('pooled-h'))
console.log(colorPool('pooled-a'))
console.log(colorPool('pooled-b'))
console.log(colorPool('pooled-c'))

const emojiPool = emoji.pool()
console.log(emojiPool('pooled-1'))
console.log(emojiPool('pooled-2'))
console.log(emojiPool('pooled-3'))
console.log(emojiPool('pooled-1'))
console.log(emojiPool('pooled-2'))
console.log(emojiPool('pooled-3'))
