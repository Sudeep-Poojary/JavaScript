/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (let data in obj) {
    return false;
  }

  return true;
};
