/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentNo = init;

  function increment() {
    return ++currentNo;
  }

  function decrement() {
    return --currentNo;
  }

  function reset() {
    return (currentNo = init);
  }

  return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
