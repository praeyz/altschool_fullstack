function createCounter() {
  /*
   * 1. Create a variable called count inside the function.
   *    Code outside this function cannot reach it.
   * 2. Return an object with increment() and decrement(),
   *    which change count.
   * 3. Add a "get value()" getter, which reads count
   *    when you write counter.value (no brackets needed).
   * 4. The returned functions still remember count after
   *    createCounter has finished running. This is a closure.
   */
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get value() {
      return count;
    }
  };
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible
