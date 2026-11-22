function deepFreeze(obj) {
  /*
   * 1. Loop through every key in the object.
   * 2. If the value is an object (and not null), call deepFreeze on it first.
   * 3. After all nested objects are frozen, freeze the object itself.
   * 4. Return the frozen object so it can be stored in a variable.
   */
  for (let key in obj) {
    let value = obj[key];

    // Freeze nested objects first
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  }

  // Freeze the object itself
  Object.freeze(obj);

  return obj;
}
const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com' // should be ignored
config.debug = true                        // should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))
