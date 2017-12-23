const emoji = require('node-emoji')

module.exports = {
  key: kw => emoji.get(kw),
  inject: text => emoji.emojify(text),
  random: () => emoji.random()
}
