/**
 * Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace.
 * The first, reverseArray, takes an array as argument and produces a new array that has the same elements in
 * the inverse order.
 * The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument
 * in order to reverse its elements. Neither may use the standard reverse method.
 *
 * Two ways to reverse an array:
 *  - one way is looping through the array back to front (backwards) and use the push() method to push elements
 *  	into the new array
 *  - the other way is to loop through the array front to back (frontwards) and use the unshift() method into
 *  	the new array
 */

/* eslint-disable */
// looping backwards and pushing each iteration element into a new array
function reverseArray(array) {
  // assign a new array variable
  newArray = [];

  // lets loop backwards and push each element in the array to a new array
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  // return the new array reversed
  return newArray;
}

function reverseArray2(array) {
  // assign a new array variable
  newArray = [];

  // loop forwards and unshifting each element in the array to a new reversed array
  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }

  // return the new array reversed
  return newArray;
}

var test = [1, 2, 3, 4, 5, 6];
console.log('creating a new array reversed, looping back to front with push method:');
console.log(reverseArray(test));
console.log(reverseArray(['A', 'B', 'C']));
console.log('--------------------');
console.log('creating a new array reversed, looping front to back with unshift method:');
console.log(reverseArray2(test));
console.log(reverseArray2(['A', 'B', 'C']));
console.log('--------------------');

// this loops using Math.floor() method
function reverseArrayInPlace(array) {
  // inside the for loop of the function, there’s an expression, Math.floor(array.length / 2).
  // this refers to the length of our array
  // ex: [1, 2, 3, 4] length would be 4: Math.floor(4/2) → Math.floor(2) → 2
  // so in our loop, 'i' has to be less than 2. Since i starts at 0, 'the loop will only run twice',
  // when 'i' = 0 and when 'i' = 1
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    // first time through the loop 'i' = 0, first old is set to array[0] = 1
    // second time through the loop 'i' = 1, first old is set to array[1] = 2
    var old = array[i];
    // first time, array[0] is set to array[array.length - 1 - i] → array[4 - 1 - 0] → array[3] → 4
    // second time, array[1] is set to array[array.length - 1 - i] → array[4 - 1 - 1] → array[2] → 3
    array[i] = array[array.length - 1 - i];
    // first time, we set array[array.length - 1 - i] to old. That means array[3] = 1
    // After first time through the loop, array looks like this: [4, 2, 3, 1].
    // finally on second time, we set array[array.length - 1 - i] to old. That means array[2] = 2.
    // After 2 times through the loop, array looks like this: [4, 3, 2, 1] and we're done
    // If you have an odd number of items in your array, it still works because the middle item never
    // needs to move. First iteration shifts the items before and after middle items with odd # of items
    // Side note: depending on length of array will affect the number of iterations the loop goes through
    // to finally swap indexes until it meets in the middle of the index
    array[array.length - 1 - i] = old;
  }
  return array;
}

// reversing our array in place using the unshift(), splice(), and Math.Floor() method
function reverseArrayInPlace2(array) {
  for (var i = 0; i < array.length; i += 2) {
    // each time it unshifts our last item in the array to the front
    array.unshift(array[i]);
  }
  // once iteration is complete we now have double the length of our array
  // ex: [1, 2, 3, 4] → [4, 3, 2, 1, 1, 2, 3, 4], we slice (starting at index 4) and
  // through last index 4
  array.splice(Math.floor(array.length / 2), array.length / 2);

  return array;
}

console.log('reversing array in place using Math.floor method:');
console.log(reverseArrayInPlace(test));
console.log(reverseArrayInPlace(['A', 'B', 'C']));
console.log('--------------------');
console.log('reversing array in place using unshift, splice, and Math.Floor method:');
var test2 = [1, 2, 3, 4, 5, 6]; // need to assign new array as its mutated above in reverseArrayInPlace()
console.log(reverseArrayInPlace2(test2));
console.log(reverseArrayInPlace2(['A', 'B', 'C']));
console.log('--------------------');

/**
 * The tricky part of reverseArrayInPlace exercise:
 * - Let’s say that you want to reverse [1, 2, 3, 4].
 * - Inside the for loop of the function, there’s an expression, Math.floor(array.length / 2).
 * 	 The length of our array is 4. Let’s plug 4 into the expression:
 * 	 = Math.floor(4 / 2); // 2
 * 	 = Math.floor(2)); // 2
 * - So in our loop, 'i' has to be less than 2. Since 'i' starts at 0, the loop will only run twice,
 * 	 when 'i' = 0 and when 'i' = 1.
 * 	 Let’s see what happens the first time through the loop when i = 0. First, old is set to:
 * 	 = array[0]
 * 	 = 1
 * - Next, array[0] is set to:
 * 	 = array[array.length - 1 - i]
 * 	 = array[4 - 1 - 0]
 * 	 = array[3]
 * 	 = 4
 * - Finally, we set array[array.length - 1 - i] to old. That means array[3] = 1.
 *   After 1 time through the loop, array looks like this: [4, 2, 3, 1]
 *   Let’s see what happens the second time through the loop when 'i' = 1:
 *   First, old is set to:
 *   = array[1]
 *   = 2
 * - Next, array[1] is set to:
 * 	 = array[array.length - 1 - i]
 * 	 = array[4 - 1 - 1]
 * 	 = array[2]
 * 	 = 3
 * - Finally, we set array[array.length - 1 - i] to old. That means array[2] = 2.
 * 	 After 2 times through the loop, array looks like this: [4, 3, 2, 1]...and we’re done!
 * - If you have an odd number of items in your array, it still works because the middle item never needs to move.
 */
