var crypto = require('crypto')

module.exports = hash.hash = hash.create = hash

function hash (text, salt, algorithm) {
  salt = salt || ''
  algorithm = algorithm || 'sha256'
  var sum = crypto.createHash(algorithm)
  sum.update(text + salt)
  return algorithm + '$' + sum.digest('hex')
}

hash.verify = function (dollarhash, text, salt) {
  salt = salt || ''
  var algorithm = dollarhash.split(/\$(.+)?/)[0]
  return hash(text, salt, algorithm) === dollarhash
}