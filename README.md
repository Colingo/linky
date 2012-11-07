## Description

Takes a string and returns a string that wraps http links in anchor tags

Can also take options to specify some attributes on the anchor tag (only target at the moment)

## Simple example

```
var linky = require('linky')

linky('Go to http://www.colingo.com')
```

Returns:

```
Go to <a href="http://www.colingo.com" target="">http://www.colingo.com</a>
```

## With options

```
var linky = require('linky')

linky('Go to http://www.colingo.com',{target:"_blank"})
```

Returns:

```
Go to <a href="http://www.colingo.com" target="_blank">http://www.colingo.com</a>
```
