function validateSchema(obj, schema) {
  /*
   * 1. Create an empty array to hold the error messages.
   * 2. Loop through every key in the schema.
   * 3. If the key is missing from obj, add a "missing property" error.
   * 4. Otherwise, check the value's type with typeof.
   * 5. If the type is wrong, add an "expected ..., got ..." error.
   * 6. Return the array (it stays empty if nothing was wrong).
   */
  let errors = [];

  for (let key in schema) {
    let expectedType = schema[key];

    if (!(key in obj)) {
      errors.push(key + ": missing property");
    } else {
      let actualType = typeof obj[key];

      if (actualType !== expectedType) {
        errors.push(key + ": expected " + expectedType + ", got " + actualType);
      }
    }
  }

  return errors;
}
const schema = { name: 'string', age: 'number', isAdmin: 'boolean' }
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema))
// []
console.log(validateSchema({ name: 'Ada', age: '21' }, schema))
// ['age: expected number, got string', 'isAdmin: missing property']
