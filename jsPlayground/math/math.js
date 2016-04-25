/**
 * The Math object
 * - Math is a grab-bag of number-related utility functions, such as Math.max (maximum), Math.min (minimum),
 * 	 and Math.sqrt (square root).
 * - The Math object is used simply as a container to group a bunch of related functionality. There is only
 * 	 one Math object, and it is almost never useful as a value. Rather, it provides a namespace so that all
 * 	 these functions and values do not have to be global variables.
 * - Many languages will stop you, or at least warn you, when you are defining a variable with a name that
 * 	 is already taken. JavaScript does neither, so be careful.
 */
/*eslint-disable */

// If you need to do trigonometry, Math can help. It contains cos (cosine), sin (sine), and tan (tangent),
// as well as their inverse functions, acos, asin, and atan, respectively. The number π (pi)—or at least the
// closest approximation that fits in a JavaScript number—is available as Math.PI. (There is an old programming
// tradition of writing the names of constant values in all caps.)
function randomPointOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2)); // {x: 0.3667, y: 1.966}
console.log('---------------------');

// The previous example uses Math.random. This is a function that returns a new pseudorandom number between zero
// (inclusive) and one (exclusive) every time you call it.
console.log('I am randomly selecting a decimal number between between 0 and 1: ' + Math.random()); // 0.36993729369714856
console.log('I am randomly selecting a decimal number between between 0 and 1: ' + Math.random()); // 0.727367032552138
console.log('I am randomly selecting a decimal number between between 0 and 1: ' + Math.random()); // 0.40180766698904335
console.log('---------------------');

// Though computers are deterministic machines—they always react the same way if given the same input—it is possible
// to have them produce numbers that appear random. To do this, the machine keeps a number (or a bunch of numbers)
// in its internal state. Then, every time a random number is requested, it performs some complicated deterministic
// computations on this internal state and returns part of the result of those computations. The machine also uses
// the outcome to change its own internal state so that the next “random” number produced will be different.
// If we want a whole random number instead of a fractional one, we can use Math.floor (which rounds down to the
// nearest whole number) on the result of Math.random.
// Multiplying the random number by 10 gives us a number greater than or equal to zero, and below 10. Since Math.floor
// rounds down, this expression will produce, with equal chance, any number from 0 through 9.
console.log('I am randomly selecting a number between 0 and below 10: ' + Math.floor(Math.random() * 10)); // 8
// randomly select a number between 0 and below 100
console.log('I am randomly selecting a number between 0 and below 100: ' + Math.floor(Math.random() * 100)); // 47
console.log('---------------------');

// Math.ceil() rounds a number upward to it's nearest integer (for “ceiling”, which rounds up to a whole number):
console.log('I am using the ceiling to round 2.4 up to the whole number: ' + Math.ceil(2.4)); // 3
console.log('---------------------');

// Math.round() rounds a number to the nearest integer (to the nearest whole number).
console.log('I am using the round method to round 2.5 to nearest interger: ' + Math.round(2.5)); // 3
console.log('I am using the round method to round 4.4 to nearest interger: ' + Math.round(4.4)); // 4
