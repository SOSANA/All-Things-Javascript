/**
 * Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list
 * (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the
 * second, the second to the third, and so on.
 * var list = {
 * 	value: 1,
 * 	rest: {
 * 		value: 2,
 * 		rest: {
 * 			value: 3,
 * 			rest: null
 * 		}
 * 	}
 * };
 * The resulting objects form a chain, like this:
 * value: 1,
 * rest:   → value: 2
 *           rest:   → value: 3
 *           					 rest: null
 * A nice thing about lists is that they can share parts of their structure. For example, if I create two new values
 * {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both
 * independent lists, but they share the structure that makes up their last three elements. In addition, the original list is
 * also still a valid three-element list.
 *
 * Write a function arrayToList that builds up a data structure like the previous one
 * when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper
 * functions prepend , which takes an element and a list and creates a new list that adds the element to the front of the input
 * list, and nth , which takes a list and a number and returns the element at the given position in the list, or undefined when
 * there is no such element.
 *
 * If you haven’t already, also write a recursive version of nth.
 *
 * There are four tasks here:
 *  1. “Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument.”
 *  2. “Write a listToArray function that produces an array from a list.”
 *  3. Write a helper function “prepend, which takes an element and a list and creates a new list that adds the element to
 *  	 the front of the input list”
 *  4. Write a helper function “nth, which takes a list and a number and returns the element at the given position in the list,
 *  	 or undefined when there is no such element.” This function should be recursive.
 *
 */

/* eslint-disable */
// builds up a data structure as an argument ex: [1, 2, 3]
// Each object in the list has two properties, value and rest. Each value will be equal to an item
// in the array. So the list in the diagram above would be the result of arrayToList([1, 2, 3]).
// Each rest property is set to the next object in the list
// Our function will build the list starting from back to front. So given an array like [1, 2, 3],
// it will start by building the box at the far right {value: 3, rest: null}.
function arrayToList(array) {
  // Since the last rest property of the last item is always null, we set the initial value of list to null
  var list = null;

  // building up a list is best done back to front and, for each element, add an object to the list
  // the loop iterates over the items in the array starting from back to front
  for (var i = array.length - 1; i >= 0; i--) {
    //  Here we’re creating an object whose value property is set to array[i]. The object’s rest property
    //  is set to list, which points at the next item in the list.
    //  We then set list (left side of the equals sign) to the newly created object
    list = {
      value: array[i],
      rest: list,
    };
  }

  return list;
}

// listToArray is the opposite of arrayToList. It takes a list (like one produced by arrayToList and turns
// it back into an array
function listToArray(list) {
  // initializes an empty array
  var array = [];

  /**
   * This time we are going to loop front to back
   *
   * Every iteration of the loop, node points to the current sublist, and the body can read its value property
   * to get the current element. At the end of an iteration, node moves to the next sublist. When that is null,
   * we have reached the end of the list and the loop is finished
   *
   * The for loop sets node to list, which is pointing to the first item in the list. The loop will stop running
   * when node evaluates to false, which will happen when you get to the last item, because node.rest will be null.
   * The last part of the loop, node = node.rest, sets node to point at the next item.
   */
  for (var node = list; node; node = node.rest) {
    // As we go through each item in list, we’ll add each value to the array
    // you take value from each item (node) and add it to the end of array
    array.push(node.value);
  }
  return array;
}

// a helper function that takes a value and adds it to the front of a list. It returns a new object whose value
// property is set to value, and whose rest property is set to list. It may be a surprise how short this function
// is, but it works because it returns a new object, which is the first item, and the rest property in the first
// item points to the second item
function prepend(value, list) {
  return {
    value: value,
    rest: list,
  };
}


/**
 * takes a list and a number and returns the element at the given position in the list, or undefined
 * when there is no such element nth returns the nth item in list or undefined if that item doesn’t exist.
 * For example, say that you have a one-item list like this { value: 3, rest: null }and you try to get the
 * second item by calling nth(list, 1) the function would return:
 * = nth(list.rest, n - 1);
 * = nth(null, 1 - 1);
 * = nth(null, 0);
 * Now (!list) will be true, so the function will return undefined. Instead if you tried to get the 0th item
 * and called nth(list, 0), (n === 0) would be true, so the function would return list.value, which is 3
 */
function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    // the recursive version of nth will look at an ever smaller part of the “tail”
    // of the list and at the same time count down the index until it reaches zero,
    // at which point it can return the value property of the node it is looking at.
    // To get the zeroeth element of a list, you simply take the value property of
    // its head node. To get element N + 1, you take the Nth element of the list
    // that’s in this list’s rest property
    return nth(list.rest, n - 1);
  }
}

var test = [10, 20, 30];
console.log('Turn an array into a object list, arrayToList:');
console.log(arrayToList(test)); // { value: 10, rest: { value: 20, rest: { value: 30, rest: null }}}
console.log(arrayToList([1, 2, 3])); // { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}
console.log('----------------------------');
console.log('Turn an object list back into an array, listToArray(arrayToList()):');
console.log(listToArray(arrayToList(test))); // [10, 20, 30]
console.log(listToArray(arrayToList([1, 2, 3]))); // [1, 2, 3]
console.log('----------------------------');
console.log('A helper function that returns a new object, which is the first item, and the rest property in the first item points to the second item, prepend(firstValue, prepend(secondValue, null)):');
console.log(prepend(10, prepend(20, null))); // {value: 10, rest: {value: 20, rest: null}}
console.log('----------------------------');
console.log('Takes a list and a index number and returns the given index position value in the list or undefined if no index is found, nth(arrayToList()):');
console.log(nth(arrayToList(test), 2)); // 30
console.log(nth(arrayToList([1, 2, 3]), 1)); // 2
console.log(nth(arrayToList(test), 3)); // undefined
