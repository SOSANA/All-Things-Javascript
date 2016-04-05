/**
 * You can get the Nth character, or letter, from a string by writing "string".charAt(N) , similar
 * to how you get its length with "s".length . The returned value will be a string containing only
 * one character (for example, "b" ). The first character has position zero, which causes the last
 * one to be found at position string.length - 1 . In other words, a two-character string has length
 * 2, and its characters have positions 0 and 1. Write a function countBs that takes a string as its
 * only argument and returns a number that indicates how many uppercase “B” characters are in the
 * string. Next, write a function called countChar that behaves like countBs , except it takes a
 * second argument that indicates the character that is to be counted (rather than counting only
 * uppercase "B" characters). Rewrite countBs to make use of this new function.
 */

 /* eslint-disable */
function countChar(string, ch) {
  var counted = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === ch ) {
      counted += 1;
    }
  }
  return counted;
}

function capitalBFinder(string) {
  return countChar(string, "B");
}

console.log(capitalBFinder("BBC")); // 2
console.log(countChar('knickknack', 'k')); // 4
console.log(countChar('knicKKnack', 'k')); // 2
console.log(capitalBFinder("BoBBy")); // 3

/*
// first figure out how to add in a string that returns how many capital B's there are
function countBs(string) {
  var counted = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      counted += 1;
    }
  }
  return counted;
}

console.log(countBs("BoBBy")); // 3
*/
