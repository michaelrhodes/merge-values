# merge-values

merge-values is a little function that merges two values of any type. It will traverse objects and merge matching key-value pairs.

[![build status](https://travis-ci.org/michaelrhodes/merge-values.svg?branch=master)](https://travis-ci.org/michaelrhodes/merge-values)

## install

```sh
$ npm install merge-values
```

## use

```js
var merge = require('merge-values')

merge(1, 1)
> 1

merge(1, 2)
> 2

merge(1, [2, 3])
> [1, 2, 3]

merge([1, 2], { a: 3 })
> [1, 2, { a: 3 }]

merge({ a: 1 }, [2, 3])
> [{ a: 1 }, 2, 3]

merge({ a: 1 }, { b: 2, c: 3 })
> { a: 1, b: 2, c: 3 }

merge({ a: [0] }, { a: 1, b: 2, c: 3 })
> { a: [0, 1], b: 2, c: 3 }
```

### with infinite arguments

```js
var merge = require('merge-values/infinite')

merge(1, [2, 3], 4)
> [1, 2, 3, 4]

merge({ a: 1 }, { b: 2, c: 3 }, { d: 4 })
> { a: 1, b: 2, c: 3, d: 4 }
```

## obey
[MIT](http://opensource.org/licenses/MIT)
