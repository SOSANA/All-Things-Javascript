/**
 * The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual
 * properties.
 *
 * Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects
 * with the same properties whose values are also equal when compared with a recursive call to deepEqual.
 *
 * To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties,
 * you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have
 * to take one silly exception into account: by a historical accident, typeof null also produces "object".
 *
 * Hints:
 *  - Your test for whether you are dealing with a real object will look something like typeof x == "object" && x != null.
 *  	Be careful to compare properties only when both arguments are objects. In all other cases you can just immediately
 *  	return the result of applying ===.
 *  - Use a for/in loop to go over the properties. You need to test whether both objects have the same set of property names
 *  	and whether those properties have identical values. The first test can be done by counting the properties in both objects
 *  	and returning false if the numbers of properties are different. If they’re the same, then go over the properties of one
 *  	object, and for each of them, verify that the other object also has the property. The values of the properties are compared
 *  	by a recursive call to deepEqual. Returning the correct value from the function is best done by immediately returning false
 *  	when a mismatch is noticed and returning true at the end of the function.
 */

/* eslint-disable */
function deepEqual(a, b) {
  // If a and b are exactly the same value, return true. Remember that triple-equals (===)
  // does not perform type coercion, while double-equals (==) does
  if (a === b) {
    return true;
  }

  // This is really tricky and tests two conditions:
  // If a OR b is null, the function returns false
  // If a OR b is NOT an object, the function returns false
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    return false;
  }

  // If we get this far without returning false, it means both a and b are objects, so we
  // have to test their individual properties
  var propsInA = 0;
  var propsInB = 0;

  // Count the number of properties in a
  for (var prop in a) {
    propsInA += 1;
  }

  // Go through each property in b
  for (var prop in b) {
    // Count the number of properties in b. We’ll use this in the last line of the function
    propsInB += 1;

    // If prop is not also in a, return false.
    // If prop is in a, recursively run deepEqual on the a[prop] and b[prop].
    // If the call to deepEqual is false, return false
    if (!(prop in a) || !deepEqual(a[prop], b[prop])){
      return false;
    }
  }

  // If everything has been equal so far and a and b have the same number of properties, return true
  return propsInA == propsInB;

}

var obj = { here: { is: "an" }, object: 2};

console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, { here: 1, object: 2 })); // false
console.log(deepEqual(obj, { here: {is: "an"}, object: 2 })); // true
