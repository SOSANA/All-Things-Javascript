/**
 * Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace.
 * The first, reverseArray, takes an array as argument and produces a new array that has the same elements in
 * the inverse order.
 * The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument
 * in order to reverse its elements. Neither may use the standard reverse method.
 */
/* eslint-disable */
function reverseArray(array) {
  newArray = [];

  for (var i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}

var test = [1,2,3,4,5,6];

console.log(reverseArray(test));
