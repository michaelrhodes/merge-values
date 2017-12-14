var merge = require('./')
var reduce = Array.prototype.reduce

module.exports = infinite

function infinite () {
  return reduce.call(arguments, merge)
}
