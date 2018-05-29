const tap = require('tap')
const pool = require('../lib/pool')

tap.test('array source should result in a fixed pool', async assert => {
  const decorate = pool([
    'a',
    'b'
  ])((item, value) => `${item}-${value}`)

  assert.equal(decorate('c'), 'a-c')
  assert.equal(decorate('c'), 'a-c')
  assert.equal(decorate('d'), 'b-d')
  assert.equal(decorate('d'), 'b-d')
  assert.equal(decorate('e'), 'a-e')
  assert.equal(decorate('e'), 'a-e')
  assert.equal(decorate('f'), 'b-f')
  assert.equal(decorate('f'), 'b-f')
})

tap.test('function source should result in a generated pool', async assert => {
  const decorate = pool(() => `${Math.random()}`)((i, v) => `${i}-${v}`)

  assert.equal(decorate('c'), decorate('c'))
  assert.equal(decorate('d'), decorate('d'))
  assert.notEqual(decorate('c'), decorate('d'))
})
