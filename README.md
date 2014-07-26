# dollar-hash
A module for creating hashes, which indicate the algorithm being used like
`"alg$hash"`. Install it with `npm install dollar-hash`.

It was inspired and can be used for the [specification](https://github.com/mozilla/openbadges-specification/blob/master/Assertion/latest.md#primitives) of 
the Open Badges verification.


```js
var hash = require('dollar-hash')

var text = 'the text to hash'
var dollarhash = hash(text, 'mysalt', 'sha256')

hash.verify(dollarhash, text, 'mysalt')
// evaluates to true
```