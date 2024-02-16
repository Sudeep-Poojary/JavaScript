/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  // if n is 0, no flattening is required, hence return the original array
  if (n == 0) {
    return arr;
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // check if element is instance of array
    if (Array.isArray(arr[i])) {
      // recursively call the function for this array and push the flattened array to the answer array
      result.push(...flat(arr[i], n - 1));
    } else {
      // else directy push the current array
      result.push(arr[i]);
    }
  }
  return result;
};
