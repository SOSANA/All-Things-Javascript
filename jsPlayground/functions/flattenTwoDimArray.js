/**
 * Flattening:
 * 	- Use the reduce method in combination with the concat method to “flatten” an array of arrays
 * 		into a single array that has all the elements of the input arrays
 */

/* eslint-disable */
'use strict';

var arrays = [[1, 2, 3], [4, 5], [6]];
var arrays2 = [[2, 4, 6], [8, 10], [12]];

function flattenArray(input) {
  // notice that the second argument (the starting value) for reduce is an empty array []
  return input.reduce(function (flat, current) {
    // 'The first time' through, flat is equal to [] and current is equal to [1, 2, 3].
    // The combining function concatenates the two arrays and returns [1, 2, 3]
    // 'The second time', flat is [1, 2, 3] and is combined with [4 5], which returns
    // [1, 2, 3, 4, 5]
    // 'The last time', the combination function combines [1, 2, 3, 4, 5] and [6], which
    // returns the end result, [1, 2, 3, 4, 5, 6]
    return flat.concat(current);
  });
}

console.log(flattenArray(arrays)); // [ 1, 2, 3, 4, 5, 6 ]
console.log('----------------------');
// same as above just not assigned to a function declaration
console.log(arrays2.reduce(function(flat, current) {
  return flat.concat(current);
}));
