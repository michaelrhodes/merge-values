var arr = Array.isArray
var own = {}.hasOwnProperty

module.exports = merge

function merge (v1, v2) {
  var t1 = typeof v1
  var t2 = typeof v2

  if (v1 === v2) return v1

  // Concatenate non-objects into arrays
  if (t1 != 'object' && t2 != 'object') return v1 = [v1, v2], v1

  // Concatenate two arrays together
  if (arr(v1) && arr(v2)) return v1 = v1.concat(v2), v1

  // Push values to initial array
  if (arr(v1)) return v1[v1.length] = v2, v1

  // Make an array out of a value
  if (t1 != 'object' || arr(v2)) return v1 = [v1].concat(v2), v1

  // Merge one object into another
  var k, v1kv, v2kv
  for (k in v2) {
    if (!own.call(v2, k)) continue

    v1kv = v1[k]
    v2kv = v2[k]

    v1[k] = v1kv === void 0 ? v2kv :
      v1kv !== v2kv ? merge(v1kv, v2kv) :
      v1kv
  }

  return v1
}
