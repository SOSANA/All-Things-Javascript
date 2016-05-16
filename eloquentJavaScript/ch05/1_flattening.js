/**
 * Flattening:
 * 	- Use the reduce method in combination with the concat method to “flatten” an array of arrays
 * 		into a single array that has all the elements of the input arrays
 */

/* eslint-disable */
'use strict';

var arrays = [[1, 2, 3], [4, 5], [6]];

function flattenArray(input) {
  return input.reduce(function (flat, current) {
    return flat.concat(current);
  });
}

console.log(flattenArray(arrays)); // [ 1, 2, 3, 4, 5, 6 ]
