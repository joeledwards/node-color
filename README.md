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

## Configuration

You can customize colors using environment variables. Override the desired color using short hex codes (e.g., 000 for black)

- `BUZULI_COLOR_LIGHT` : optimized for white backgrounds (enabled,on,true,1,yes all work)
- `BUZULI_COLOR_DARK` : optimized for light backgrounds (enabled,on,true,1,yes all work)

If both `_LIGHT` and `_DARK` are specified, `_LIGHT` wins 🔦.
The default color scheme attempts to be the best balance for use on either a light or dark background.

- `BUZULI_COLOR_RED` : set red
- `BUZULI_COLOR_ORANGE` : set orange
- `BUZULI_COLOR_YELLOW` : set yellow
- `BUZULI_COLOR_GREEN` : set green
- `BUZULI_COLOR_BLUE` : set blue
- `BUZULI_COLOR_PURPLE` : set purple
- `BUZULI_COLOR_GREY` : set grey/gray
- `BUZULI_COLOR_GRAY` : set grey/gray

