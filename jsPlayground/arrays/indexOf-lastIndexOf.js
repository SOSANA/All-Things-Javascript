/*eslint-disable */

// show value 2 index starting at the beginning of the array
var firstIndex = [ 1, 2, 3, 2, 1 ].indexOf(2);
// show value 2 index starting at the end of the array
var lastIndex =  [ 1, 2, 3, 2, 1 ].lastIndexOf(2);

console.log(firstIndex); // 1
console.log(lastIndex); // 3
console.log('--------------');

// The indexOf() method searches the array for the specified item, and returns its position.
// The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.
// Returns -1 if the item is not found.
// If the item is present more than once, the indexOf method returns the position of the first occurence.
// Note: The first item has position 0, the second item has position 1, and so on.
var fruits = ["Banana", "Orange", "Apple", "strawberry", "Apple","kiwi" , "Mango"];
var a = fruits.indexOf("Apple");
var b = fruits.lastIndexOf("Apple");
console.log(a); // 2
console.log(b); // 4
console.log('--------------');

// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
// Note: The string is searched from the end to the beginning, but returns the index starting at the beginning, at postion 0.
// This method returns -1 if the value to search for never occurs.
// Note: The lastIndexOf() method is case sensitive!
var str = "Hello planet earth, you are a great planet.";
var nFirst = str.indexOf("planet");
var nlast = str.lastIndexOf("planet");
console.log(nFirst); // 6
console.log(nlast); // 36
