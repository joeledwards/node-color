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

The default color scheme attempts to be the best balance for use on either a light or dark background.
There are two environment variables for optimizing the colors for the terminal background (light vs. dark).

- `BUZULI_COLOR_LIGHT` : optimized for light backgrounds (enabled,on,true,1,yes all work)
- `BUZULI_COLOR_DARK` : optimized for dark backgrounds (enabled,on,true,1,yes all work)

If both `_LIGHT` and `_DARK` are specified, `_LIGHT` wins 🔦.

You can customize individual colors using the following environment variables; use short hex codes (e.g., 000 for black):

- `BUZULI_COLOR_RED` : sets `red`
- `BUZULI_COLOR_ORANGE` : sets `orange`
- `BUZULI_COLOR_YELLOW` : sets `yellow`
- `BUZULI_COLOR_GREEN` : sets `green`
- `BUZULI_COLOR_BLUE` : sets `blue`
- `BUZULI_COLOR_PURPLE` : sets `purple`
- `BUZULI_COLOR_GREY` : sets `grey`/`gray`
- `BUZULI_COLOR_GRAY` : sets `grey`/`gray`

You can set the color [level](https://www.npmjs.com/package/chalk#chalklevel) via `BUZULI_COLOR_LEVEL`:
- 0 : off (disabled)
- 1 : 16 colors (basic)
- 2 : 256 colors
- 3 : 16 million (Truecolor)
