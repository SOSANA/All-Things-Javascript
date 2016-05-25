/**
 * Every and then some:
 *  - Arrays also come with the standard methods 'every' and 'some'. Both take a predicate function
 *  	that, when called with an array element as argument, returns true or false. Just like &&
 *  	returns a true value only when the expressions on both sides are true, every returns true
 *  	only when the predicate returns true for all elements of the array. Similarly, some returns
 *  	true as soon as the predicate returns true for any of the elements. They do not process more
 *  	elements than necessary—for example, if some finds that the predicate holds for the first
 *  	element of the array, it will not look at the values after that
 *  - Write two functions, every and some, that behave like these methods, except that they take
 *  	the array as their first argument rather than being a method
 *
 * Predicate functions:
 *  - is a function that returns true or false based on some condition. In this problem, we’re using
 *  	isNaN(testValue), which returns true if testValue is NaN (remember this means not a number),
 *  	and false otherwise
 *
 * .every():
 * 	- stops looping the first time the iterator returns false or something falsey
 * 	- returns a boolean - true if every element in this array satisfies the provided
 * 		testing function. An important difference with .every() is that the test function
 * 		may not always be called for every element in the array. Once the testing function
 * 		returns false for any element, no more array elements are iterated. Therefore, the
 * 		testing function should usually have no side effects.
 */

/* eslint-disable */
'use strict';

// shows how the build-in .every() method works
// if everything in the array element has the same typeOf value in array return boolean
function showEvery(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    // If the element does not satisfy the predicate, return false
    if (!predicate(array[i])) {
      return false;
    }
  }
  // If we get all the way to the end, all the predicate functions pass
  return true;
}

console.log('showing how the every() method works internally: ' + showEvery([NaN, NaN, NaN], isNaN)); // true
console.log('showing how the every() method works internally: ' + showEvery([NaN, NaN, 4], isNaN)); // false
console.log('------------------------');

// function to verify if element is string or not
function isAString(a) {
  if (typeof a === 'string') {
    return true;
  }
}

console.log('showing how the every() method works internally: ' + showEvery(['hi', 'bonjour', 'hola'], isAString)); // true
console.log('showing how the every() method works internally: ' + showEvery(['hi', 'bonjour', 'hola', 2], isAString)); // false
console.log('------------------------');
// showing how to use the built-in .every() method
console.log(['hi', 'bonjour', 'hola'].every(isAString)); // true
console.log(['hi', 'bonjour', 'hola', 5, 6, 2].every(isAString)); // false
console.log('------------------------');
console.log(['hi', 'bonjour', 'hola'].every(isNaN)); // true
console.log([1, 2, 3, 'hi', 'bonjour', 'hola'].every(isNaN)); // false
