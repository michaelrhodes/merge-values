# merge-values

merge-values is a little function that merges two values of any type. It will traverse objects and merge matching key-value pairs.

[![build status](https://travis-ci.org/michaelrhodes/merge-values.svg?branch=master)](https://travis-ci.org/michaelrhodes/merge-values)

## install

```sh
$ npm install merge-values
```

## example

```js
var merge = require('merge-values')

merge(1, 1)
> 1

merge(1, 2)
> [1, 2]

merge(1, [2, 3])
> [1, 2, 3]

merge([1, 2], { a: 3 })
> [1, 2, { a: 3 }]

merge({ a: 1 }, [2, 3])
> [{ a: 1 }, 2, 3]

merge({ a: 1 }, { b: 2, c: 3 })
> { a: 1, b: 2, c: 3 }

merge({ a: 1 }, { a: 1, b: 2 })
> { a: 1, b: 2 }

merge({ a: 0 }, { a: 1, b: 2 })
> { a: [0, 1], b: 2 }
```

## licence
[MIT](http://opensource.org/licenses/MIT)
