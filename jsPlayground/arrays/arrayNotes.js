/**
 * .apply():
 *  - doesn't make a copy, invokes the function and lets you set the 'this' keyword but only difference
 *  	is it wants an array of parameters
 *  - see ex: /call-apply-bind
 *
 * .concat():
 * 	- is a method you call on an existing array and returns back to you a
 *  	new array that has the orignal array plus any parameters you pass in. It
 *  	does not limit the amount of arrguments you pass in
 *  - can flatten arrays
 *  - cannot do nested arrays
 *
 * .every():
 * 	- stops looping the first time the iterator returns false or something falsey
 * 	- returns a boolean - true if every element in this array satisfies the provided
 * 		testing function. An important difference with .every() is that the test function
 * 		may not always be called for every element in the array. Once the testing function
 * 		returns false for any element, no more array elements are iterated. Therefore, the
 * 		testing function should usually have no side effects.
 *
 * .filter():
 * 	- creates a new array including elements where the filter function returns true and
 * 		omitting the ones where it returns false
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
 * 	- returns nothing - It iterates the Array performing a given action for each item
 * 		in the Array
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
 *  - The map method transforms an array by applying a function to all of its elements
 *  	and building a new array from the returned values. The new array will have the same
 *  	length as the input array, but its content will have been “mapped” to a new form by
 *  	the function
 *  - Transform every element in a set.
 *  	ex:
 *  	we went through the array of person objects in ancestry and used map to return an
 *  	array of just names. In this case, person object was transformed to just a string
 *
 * .pop():
 *  - can be use to remove values at the end of the array
 *
 * .push():
 *  - can be used to add values to the end of the array
 *
 * .reduce():
 * 	- builds up a value by repeated calling the iterator, passing in previous values;
 * 		see the spec for the details; useful for summing the contents of an array and
 * 		many other things
 * 	- The higher-order operation that represents this pattern is called reduce
 *  	(or sometimes fold). You can think of it as folding up the array, one element at a
 *  	time. When summing numbers, you’d start with the number zero and, for each element,
 *  	combine it with the current sum by adding the two.
 *  - The parameters to the reduce function are, apart from the array, a combining function
 *  	and a start value.
 *  - Remember the point of reduce is to turn an array of elements into a single value. For
 *  	example, you might want to use reduce to get the sum of all the elements in the array.
 *  - Another common pattern of computation on arrays is computing a single value from
 *  	them. Our recurring example, summing a collection of numbers, is an instance of
 *  	this. Another example would be finding the person with the earliest year of birth
 *  	in the data set
 *  - has an added convenience. If your array contains at least one element, you are allowed
 *  	to leave off the start argument. The method will take the first element of the array as i
 *  	ts start value and start reducing at the second element
 *  - Use the elements in a set to compute a single value. For example, we’ve taken an array
 *  	of numbers and used reduce to get the sum of all the numbers.
 *  	ex:
 *  	we went through all the people objects in the ancestry array to find the oldest person
 *
 * .reduceRight():
 * 	- like reduce, but works in descending rather than ascending order
 *
 * .shift();
 *  - removes item from the start of the array
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
 *
 * .splice():
 *  - changes the content of an array by removing existing elements and/or adding
 * 	 	new elements
 *  - when given a start and deleteCount as its first two parameters, any parameters after this will
 * 	 	be added to the end of the array
 *
 * .unshift():
 *  - adds last item to the start of array and does not remove last item
 */
