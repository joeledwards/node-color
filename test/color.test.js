const tap = require('tap')
const color = require('../lib/color')

tap.test('setColorLevel should use the supplied color level if it is valid', async assert => {
  assert.equal(color.setColorLevel(0), 0)
  assert.equal(color.setColorLevel(1), 1)
  assert.equal(color.setColorLevel(2), 2)
  assert.equal(color.setColorLevel(3), 3)

  assert.equal(color.setColorLevel('0'), 0)
  assert.equal(color.setColorLevel('1'), 1)
  assert.equal(color.setColorLevel('2'), 2)
  assert.equal(color.setColorLevel('3'), 3)
})

tap.test('setColorLevel should use default if an invalid level is supplied', async assert => {
  assert.equal(color.setColorLevel(-1), 0)
  assert.equal(color.setColorLevel(4), 3)

  assert.equal(color.setColorLevel('-1'), 0)
  assert.equal(color.setColorLevel('4'), 3)
})

tap.test('color level be set based on the environment variable', async assert => {
  process.env.BUZULI_COLOR_LEVEL = '-1'
  color.initColor(true)
  assert.equal(color.getColorLevel(), 0)

  process.env.BUZULI_COLOR_LEVEL = '0'
  color.initColor(true)
  assert.equal(color.getColorLevel(), 0)

  process.env.BUZULI_COLOR_LEVEL = '1'
  color.initColor(true)
  assert.equal(color.getColorLevel(), 1)

  process.env.BUZULI_COLOR_LEVEL = '2'
  color.initColor(true)
  assert.equal(color.getColorLevel(), 2)

  process.env.BUZULI_COLOR_LEVEL = '3'
  color.initColor(true)
  assert.equal(color.getColorLevel(), 3)

  process.env.BUZULI_COLOR_LEVEL = '4'
  color.initColor(true)
  assert.equal(color.getColorLevel(), 3)
})

tap.test('default level for a TTY should be 0', async assert => {
  process.env.BUZULI_COLOR_LEVEL = '-1'
  color.initColor()
  assert.equal(color.getColorLevel(), 0)

  process.env.BUZULI_COLOR_LEVEL = '0'
  color.initColor()
  assert.equal(color.getColorLevel(), 0)

  process.env.BUZULI_COLOR_LEVEL = '1'
  color.initColor()
  assert.equal(color.getColorLevel(), 0)

  process.env.BUZULI_COLOR_LEVEL = '2'
  color.initColor()
  assert.equal(color.getColorLevel(), 0)

  process.env.BUZULI_COLOR_LEVEL = '3'
  color.initColor()
  assert.equal(color.getColorLevel(), 0)

  process.env.BUZULI_COLOR_LEVEL = '4'
  color.initColor()
  assert.equal(color.getColorLevel(), 0)
})
