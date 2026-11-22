function deepEqual(objA, objB) {
    /*
   * 1. If both values are strictly equal (same primitive or same reference), they match.
   * 2. If either value is not an object (or is null), they cannot match at this point.
   * 3. Arrays and plain objects must not be compared against each other.
   * 4. Both objects must have the same number of own keys.
   * 5. Every key in objA must exist in objB, and the values must be deeply equal (recursion).
   */
  
    // Step 1: If they are exactly the same, return true
  if (objA === objB) {
    return true;
  }

  // Step 2: If either one is not an object, they are not equal
  if (typeof objA !== "object" || typeof objB !== "object") {
    return false;
  }

  // Step 3: null is also an "object" in JavaScript, so check for it
  if (objA === null || objB === null) {
    return false;
  }

  // Step 4: Count the keys in each object
  let countA = 0;
  let countB = 0;

  for (let key in objA) {
    countA++;
  }

  for (let key in objB) {
    countB++;
  }

  // Step 5: If they have a different number of keys, they are not equal
  if (countA !== countB) {
    return false;
  }

  // Step 6: Check each key and value
  for (let key in objA) {
    // If objB does not have this key, they are not equal
    if (!(key in objB)) {
      return false;
    }

    // Compare the values (this also works for nested objects)
    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  // Step 7: Everything matched
  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }))                     // false
