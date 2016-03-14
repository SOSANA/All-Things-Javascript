/**
 * .concat():
 * 	- is a method you call on an existing array and returns back to you a
 *  	new array that has the orignal array plus any parameters you pass in. It
 *  	does not limit the amount of arrguments you pass in
 *  - can flatten arrays
 *  - cannot do nested arrays
 *
 * .every():
 * 	- stops looping the first time the iterator returns false or something falsey
 * 	- returns a boolean - true if every element in this array satisfies the provided testing function.
 * 		An important difference with .every() is that the test function may not always be called for every
 * 		element in the array. Once the testing function returns false for any element, no more array elements
 * 		are iterated. Therefore, the testing function should usually have no side effects.
 *
 * .filter():
 * 	- creates a new array including elements where the filter function returns true and omitting the ones
 * 		where it returns false
 * 	- creates a new array, it does this by calling a function that you provide
 * 		as the argument with each item in the source array, then it looks at the
 * 		return value from that function call. If it's a truthy value such as a
 * 		number, string, boolean then the current item we are looking at will make
 * 		it into the filtered array. How ever if the function call returns a
 * 		falsey value then the item is discarded
 *  - remember that you only need to return a truthy or a falsey value to then
 *  	function that gets called to each item
 *
 * .forEach():
 * 	- returns nothing - It iterates the Array performing a given action for each item in the Array
 *
 * .indexOf():
 * 	- is used to search an array for a particular value
 * 	- has second parameter which is the start position of the search
 * 	- careful on mutating array and passing in second parameter as it might not
 * 		work as expected
 *
 * .join():
 * 	- produces a string that is the result of adding together all items in array
 *
 * .map():
 * 	- creates a new array from the values returned by the iterator function
 *  - returns a new Array of objects created by taking some action on the original item
 *
 * .reduce():
 * 	- builds up a value by repeated calling the iterator, passing in previous values; see the spec for the
 * 		details; useful for summing the contents of an array and many other things
 *
 * .reduceRight():
 * 	- like reduce, but works in descending rather than ascending order
 *
 * .slice():
 * 	- creates a shallow copy of an array
 * 	- takes a subsection of the array
 * 	- can take to parameters, a start and end items.slice(start, end)
 * 	- if the original array contains object references, it does not create a new
 * 		object that matches it, the reference itself is copied. It will motify both
 *
 * .some():
 * 	- stops looping the first time the iterator returns true or something truthy
 *
 * .sort():
 * 	- sorts element in place and returns the same array
 * 	- sorting defaults to unicode when sorting numbers which converts numbers
 * 		to strings first
 */
