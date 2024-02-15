/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  // Base case: if obj is not an object or is null, return it as is
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Case for arrays: recursively compact each element and remove falsy values
  if (Array.isArray(obj)) {
    const compactArr = [];
    for (let i = 0; i < obj.length; i++) {
      let val = compactObject(obj[i]);
      if (val) {
        compactArr.push(val);
      }
    }
    return compactArr;
  }

  // Case for objects: create a new compacted object
  const compactObj = {};

  for (let key in obj) {
    const val = compactObject(obj[key]);
    if (val) {
      compactObj[key] = val;
    }
  }
  return compactObj;
};
