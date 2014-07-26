var test = require('tape')

var hash = require('./index.js')

test('hash', function (t) {
  t.equal(
    hash('hypertest'), 
    'sha256$101663934968b186b672da922b5f9696c900ba511a5b426e8f9ded62e3e929d0',
    'sha256 by default'
  )
  
  t.equal(
    hash('whatever', '', 'md5'),
    'md5$008c5926ca861023c1d2a36653fd88e2',
    'md5 should work'
  )
  
  t.equal(
    hash('saltedpeanut', 'onewasassaulted', 'md5'),
    'md5$64fd5ea5fa2b5448e3ac1e53ef34a3da',
    'salted value'
  )
  
  t.end()
})

test('hash.hash', function (t) {
  t.equal(hash, hash.hash)
  t.end()
})

test('hash.create', function (t) {
  t.equal(hash, hash.create)
  t.end()
})

test('hash.verify', function (t) {
  t.ok(
    hash.verify('sha256$101663934968b186b672da922b5f9696c900ba511a5b426e8f9ded62e3e929d0', 'hypertest'),
    'verified sha256 unsalted'
  )
  
  t.notOk(
    hash.verify('sha256$101663934968b1872da922b5f9696c900ba511a5b426e8f9ded62e3e929d0', 'hypertest'),
    'detect wrong sha256 unsalted'
  )
  
  t.ok(
    hash.verify('md5$008c5926ca861023c1d2a36653fd88e2', 'whatever'),
    'verified md5 unsalted'
  )
  
  t.notOk(
    hash.verify('md5$008c5926ca861023c1d2a36653fd88e2', 'what'),
    'detect wrong md5 unsalted'
  )
  
  t.ok(
    hash.verify('md5$64fd5ea5fa2b5448e3ac1e53ef34a3da', 'saltedpeanut', 'onewasassaulted'),
    'verified md5 salted'
  )
  
  t.notOk(
    hash.verify('md5$64fd5ea5fa2b5448e3ac1e53ef34a3da', 'saltedpeanut', 'onewasaaulted'),
    'detect wrong md5 salted'
  )
  
  t.end()
})