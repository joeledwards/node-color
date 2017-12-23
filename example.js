
const {
  red, yellow, blue,
  orange, green, purple,
  gray, hex, key
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
