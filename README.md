# color

Useful colors for my (@buzuli) personal projects.

## Installation

```
npm install @buzuli/color
```

## Usage

Preferred color functions are available.

```javascript
const {
  red, yellow, blue,
  orange, green, purple,
  gray
} = require('@buzuli/color')

console.log(red('rojo'))
console.log(orange('naraja'))
console.log(yellow('amarillo'))
console.log(green('verde'))
console.log(blue('azul'))
console.log(purple('púrpura'))
console.log(gray('gris'))
```

Custom colors by hex value or keyword.

```javascript
const {hex, key} = require('@buzuli/color')

console.log(key('orange')('My favorite color'))
console.log(hex('abc')('Surprise me.'))

```

One more thing:  Emoji 🐿

```javascript
const {
  green, yellow, orange, gray, emoji
} = require('@buzuli/color')

console.log(green(emoji.inject(':umbrella:  spring :tulip:')))
console.log(yellow(emoji.inject(':palm_tree:  summer :sunny:')))
console.log(orange(emoji.inject(':jack_o_lantern:   fall  :fallen_leaf:')))
console.log(gray(emoji.inject(':snowman:  winter :snowflake:')))
```

