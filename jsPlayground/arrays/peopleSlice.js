/**
 * slice()
 * 	- creates a shallow copy of an array
 * 	- takes a subsection of the array
 * 	- can take to parameters, a start and end items.slice(start, end)
 * 	- if the original array contains object references, it does not create a new
 * 		object that matches it, the reference itself is copied. It will motify both
 */
var person = { name: 'Shane' };
var items = [1, person, 2, 3, 4, 5, 6, 7, 8];
var copy = items.slice(); // creates a copy
copy.push(6); // pushing 6 to end of copy array
copy[0] = 100; // changes index 0 value to 100
copy[1] = 'Sally'; // changes index 1 value in both original and the reference

var copy2 = items.slice(0, 2); // starting at index 0 and ending at index 2
var copy3 = items.slice(3); // starting at index 3 and showing rest of array
var copy4 = items.slice(4, 7); // grabbing subsection of array

// a negative number makes the start position count backwards from the end
// so -1 means go back to the end, go back one item and and then begin the slice
var copy5 = items.slice(-1); // grabs last index item
var copy6 = items.slice(-3); // grabs the last three index items
var copy7 = items.slice(1, -1); // starts at index 1 and ends -1 from end
var copy8 = items.slice(2, -3); // starts at index 2 and ends -3 from end

// items will remain the same
console.log(items);
console.log('---------------------');
console.log(copy);
console.log('---------------------');
console.log(copy2);
console.log('---------------------');
console.log(copy3);
console.log('---------------------');
console.log(copy4);
console.log('---------------------');
console.log(copy5);
console.log('---------------------');
console.log(copy6);
console.log('---------------------');
console.log(copy7);
console.log('---------------------');
console.log(copy8);

// practical example
var person = {
  name: 'shane-osbourne',
};

var filters = {
  deslugify: x => x.replace('-', ' '), // replace any - with a space
  uppercase: x => x.toUpperCase(), // turns any value into uppercase
};

// split this input on a pipe character
var input = 'name | deslugify | uppercase'; // SHANE OSBOURNE

// trim the white spaces
var sections = input.split('|').map(x => x.trim()); // [name, deslugify, uppercase]
console.log(sections);
console.log('---------------------');

// then we saved our first item with reference to our person object
var ref = person[sections[0]];
console.log(ref);

var output = sections
  .slice(1) // sliced off however many after the first one which created a new array with just deslugify and uppercase
  .reduce((prev, next) => {
    if (filters[next]) {
      return filters[next].call(null, prev);
    }

    return prev;
  }, ref);

console.log(output); // SHANE OSBOURNE
