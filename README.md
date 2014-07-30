# dollar-hash
 [![Build Status](https://travis-ci.org/finnp/node-dollar-hash.svg?branch=master)](https://travis-ci.org/finnp/node-dollar-hash)
 ![License MIT](http://img.shields.io/npm/l/dollar-hash.svg)
 ![Version](http://img.shields.io/npm/v/dollar-hash.svg)

A module for creating hashes, which indicate the algorithm being used like
`"alg$hash"`. Install it with `npm install dollar-hash`.

It was inspired and can be used for the [specification](https://github.com/mozilla/openbadges-specification/blob/master/Assertion/latest.md#primitives) of 
the Open Badges verification. Actually it is adapted from a piece of code written
by @brianloveswords [in this wiki](https://github.com/mozilla/openbadges/wiki/How-to-hash-&-salt-in-various-languages./189b321a5659ab9475777530a68661cc51695a5f#nodejs)

```js
var hash = require('dollar-hash')

var text = 'the text to hash'
var dollarhash = hash(text, 'mysalt', 'sha256')

hash.verify(dollarhash, text, 'mysalt', 'sha256')
// evaluates to true
```

## Methods

### hash(text[, salt, algorithm])

Creates a dollar hash of `text`, optionally with a specific salt and algorithm
(defaults to `sha256`).

### hash.verify(dollarhashed, text[, salt, algorithm])

Compares the hash of `text` with `dollarhashed`, optionally using a salt
and a specific algorithm (defaults to `sha256`).
Returns a boolean value.


### hash.create / hash.hash
Aliases of `hash`.