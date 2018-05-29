const tap = require('tap')
const pool = require('../lib/pool')

tap.test('', async assert => {
  const color = pool([
    'a',
    'b'
  ])((item, value) => `${item}-${value}`)

  assert.equal(color('c'), 'a-c')
  assert.equal(color('c'), 'a-c')
  assert.equal(color('d'), 'b-d')
  assert.equal(color('d'), 'b-d')
  assert.equal(color('e'), 'a-e')
  assert.equal(color('e'), 'a-e')
  assert.equal(color('f'), 'b-f')
  assert.equal(color('f'), 'b-f')
})
