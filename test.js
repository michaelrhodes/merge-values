var eq = require('assert').deepEqual
var merge = require('./')
var infinite = require('./infinite')

eq(merge(1, 1), 1)
eq(merge(1, 2), 2)
eq(merge(1, [2, 3]), [1, 2, 3])
eq(merge([1, 2], { a: 3 }), [1, 2, { a: 3 }])
eq(merge({ a: 1 }, [2, 3]), [{ a: 1 }, 2, 3])
eq(merge({ a: 1 }, { b: 2, c: 3 }), { a: 1, b: 2, c: 3 })
eq(merge({ a: 1 }, { a: 1, b: 2 }), { a: 1, b: 2 })
eq(merge({ a: 0 }, { a: 1, b: 2 }), { a: 1, b: 2 })
eq(merge({ a: [0] }, { a: 1, b: 2 }), { a: [0, 1], b: 2 })
eq(infinite({ a: 1 }, { a: 1, b: 2 }, { c: 3 }), { a: 1, b: 2, c: 3 })
