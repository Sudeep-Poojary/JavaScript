// Functinal Programming

const radius = [3, 1, 2, 4];

// Callback functions
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// Higher Order Function
// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// both the calculate function and the map function does the same job
console.log(radius.map(area));
// console.log(calculate(radius, area));

// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// ---------------------------------------------------------------------------------------------------------
// The above calculate func can also be written as follows inorder to call it in a way similar to map function
Array.prototype.calculate = function (logic) {
  // No need to enter array as an argument (radius)
  const output = [];
  for (let i = 0; i < this.length; i++) {
    //  'this' is written instead of Array i.e.,(radius)
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area)); // function call similar to map func
