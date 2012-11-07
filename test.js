var assert = require('assert')
    , linky = require('./index')

assert.equal(
    linky('Go to http://www.colingo.com')
    , 'Go to <a href="http://www.colingo.com" target="">http://www.colingo.com</a>')

assert.equal(
    linky('Go to http://colingo.com')
    , 'Go to <a href="http://colingo.com" target="">http://colingo.com</a>')

assert.equal(
    linky('Go to http://www.colingo.com',{target:"_blank"})
    , 'Go to <a href="http://www.colingo.com" target="_blank">http://www.colingo.com</a>')
