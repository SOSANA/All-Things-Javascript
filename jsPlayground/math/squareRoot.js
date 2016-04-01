/**
 * The Babylonian Method:
 *  - src: http://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
 *  - param n - the number to compute the square root of
 *  - param g - the best guess so far (can omit from initial call)
 */

 /*eslint-disable */
function squareRoot(n, g) {
  if (!g) {
    // Take an initial guess at the square root
    var g = n / 2;
  }
  // ignore vars declared at top function scope as we need to grab a guess
  // otherwise will run recursively until times out
  var d = n / g;             // Divide our guess into the number
  var ng = (d + g) / 2;     // Use average of g and d as our new guess
  if (g === ng) {
    // The new guess is the same as the old guess; further guesses
    // can get no more accurate so we return this guess
    return g;
  }
  // Recursively solve for closer and closer approximations of the square root
  return squareRoot(n, ng);
}
console.log(squareRoot(81)); // 9
console.log(squareRoot(55)); // 7.416198487095663
