/**
 * Sequence interface:
 *  - Design an interface that abstracts iteration over a collection of values. An object that provides this interface
 *  	represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate
 *  	over the sequence, looking at the element values it is made up of and having some way to find out when the end of
 *  	the sequence is reached
 *  	- The goal is to create an object that holds a collection of values and also gives you methods
 *  		for iterating over the sequence
 *  	- In particular, it should have a method that lets you look at specific values (aka “looking at
 *  		the element values it is made up of”)
 *  	- It should also have a method that tells you when you’ve reached the end of the sequnce so that
 *  		you know when to stop looking at values (aka “some way to find out when the end of the sequence is reached”)
 *  	- This object and its methods are the “interface” that allow you to iterate over a collection of values
 *  	- An aside about interfaces:
 *  	  - I like to think of an interface as a set of switches that you operate. For example, a car is an interface
 *  	  	for getting around. The car is the object. And each car object gives you some methods that you can use like
 *  	  	a gas pedal, brake pedal, and a steering wheel
 *  - When you have specified your interface, try to write a function logFive that takes a sequence object and calls
 *  	console.log on its first five elements—or fewer, if the sequence has fewer than five elements
 *  - Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface
 *  	you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to
 *   	arguments to its constructor) instead
 *
 * Hints:
 *  - One way to solve this is to give the sequence objects state, meaning their properties are changed in the process of
 *  	using them. You could store a counter that indicates how far the sequence object has advanced
 *  - Your interface will need to expose at least a way to get the next element and to find out whether the iteration has
 *  	reached the end of the sequence yet. It is tempting to roll these into one method, next, which returns null or undefined
 *  	when the sequence is at its end. But now you have a problem when a sequence actually contains null. So a separate method
 *  	(or getter property) to find out whether the end has been reached is probably preferable
 *  - Another solution is to avoid changing state in the object. You can expose a method for getting the current element (without
 *  	advancing any counter) and another for getting a new sequence that represents the remaining elements after the current one
 *  	(or a special value if the end of the sequence is reached). This is quite elegant—a sequence value will “stay itself” even
 *  	after it is used and can thus be shared with other code without worrying about what might happen to it. It is, unfortunately,
 *  	also somewhat inefficient in a language like JavaScript because it involves creating a lot of objects during iteration
 */

/* eslint-disable */
'use strict';

/**
 * I am going to use a system where a sequence object has two methods:
 *  - next(), which returns a boolean indicating whether there are more elements in the sequence, and moves it
 *  	forward to the next element when there are.
 *  - current(), which returns the current element, and should only be called after next() has returned true at
 *  	least once.
 */

 // Function that does the following up to 5 times:
 // Call sequence.next() and log the current element to the console
function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next()) {
      break;
    } else {
      console.log(sequence.current());
    }
  }
}

// ArraySequence is an object for iterating over an array of elements. It keeps track of its position by using an index
// position in array. Each time you call next(), you move the index up. next() checks the index against the length of
// the array to know when there are no more elements left. Each instance of ArraySeq has two properties:
// 1) pos: for keeping track of where you are in array.
// 2) array: reference to the actual array object.
function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}
// next() returns false if there are no more items in the sequence. Otherwise, it increments this.pos and returns true
ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1) {
    return false;
  } else {
    this.pos++;
  }
  return true;
};
// current() returns the current element in the sequence
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

// RangeSeq is an Object for iterating over a range of integers. Each time from() is called, this.pos is incremented and
// is also used to keep track of the current integer. from() returns false once this.pos >= this.to
// Each instance of RangeSeq has two properties:
// 1) pos: for keeping track of where you are in the sequence.
// 2) to: reference to the end of the range
function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
// next() returns false if there are no more items in the sequence. Otherwise, it increments this.pos and returns true
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to) {
    return false;
  } else {
    this.pos++;
  }
  return true;
};
// current() returns the current element in the sequence
RangeSeq.prototype.current = function() {
  return this.pos;
};

console.log('using a system where a sequence object has two methods:');
logFive(new ArraySeq([1, 2]));
// 1
// 2
console.log('---------------------');
logFive(new RangeSeq(100, 1000));
// 100
// 101
// 102
// 103
// 104
console.log('---------------------');


/**
 * This alternative approach represents the empty sequence as undefined, and gives non-empty sequences two methods:
 *  - head() returns the element at the start of the sequence.
 *  - rest() returns the rest of the sequence, or null if there are no elemements left.
 * Because a JavaScript constructor cannot return null, we add a make function to constructors of this type of sequence,
 * which constructs a sequence, or returns undefined if the resulting sequence would be empty.
 */

 // Logs items in a sequence up to five times. After you reach the end of the sequence, sequence.rest() returns undefined
 // (since there are no items left). head() grabs the current element in the sequence
function logFive2(sequence) {
  for (var i = 0; i < 5 && sequence !== undefined; i++) {
    console.log((sequence.head()));
    sequence = sequence.rest();
  }
}

// Each instance stores a reference to the array and the offset, which is used to keep track of where you are in the array
function ArraySeq2(array, offset) {
  this.array = array;
  this.offset = offset;
}
// This returns a new ArraySeq2 object, with an incremented offset
ArraySeq2.prototype.rest = function() {
  return ArraySeq2.make(this.array, this.offset + 1);
};
// Returns the current element
ArraySeq2.prototype.head = function() {
  return this.array[this.offset];
};
// We use this make function rather than using the constructor directly because objects created with the new operator
// cannot return null
ArraySeq2.make = function(array, offset) {
  // If an offset is not entered, assume it's 0
  if (offset === undefined) {
    offset = 0;
  }
  // This means we've reached the end of the array
  if (offset >= array.length) {
    return undefined;
  } else {
    // Return a new ArraySeq2
    return new ArraySeq2(array, offset);
  }
};

// Follows a similar strategy as ArraySeq2 except it uses rest to return the remaining integers in a range
function RangeSeq2(from, to) {
  this.from = from;
  this.to = to;
}
RangeSeq2.prototype.rest = function() {
  return RangeSeq2.make(this.from + 1, this.to);
};
RangeSeq2.prototype.head = function() {
  return this.from;
};
RangeSeq2.make = function(from, to) {
  if (from > to) {
    return undefined;
  } else {
    return new RangeSeq2(from, to);
  }
};

console.log('alternative approach represents the empty sequence as undefined:');
logFive2(ArraySeq2.make([1, 2]));
// 1
// 2
console.log('---------------------');
logFive2(RangeSeq2.make(100, 1000));
// 100
// 101
// 102
// 103
// 104
