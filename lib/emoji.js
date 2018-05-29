const emoji = require('node-emoji')
const pool = require('./pool')

module.exports = {
  key,
  inject,
  pool: emojiPool,
  random
}

function key (keyWord) {
  return emoji.get(keyWord)
}

function inject (text) {
  return emoji.emojify(text)
}

function random () {
  return emoji.random()
}

function emojiPool () {
  // TODO: supply consistently formatted emoji (single vs double wide)
  return pool(random)((decor, value) => `${decor.emoji} ${value}`)
}
