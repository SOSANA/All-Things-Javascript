/**
 * Data sets:
 *  - JavaScript provides a data type specifically for storing sequences of values. It is called
 *  	an array and is written as a list of values between square brackets, separated by commas.
 * Properties:
 *  - Almost all JavaScript values have properties. The exceptions are null and undefined . If you
 *  	try to access a property on one of these nonvalues, you get an error.
 *  - The two most common ways to access properties in JavaScript are with a dot and with square
 *  	brackets. Both value.x and value[x] access a property on value —but not necessarily the same
 *   	property. The difference is in how x is interpreted. When using a dot, the part after the dot
 *    must be a valid variable name, and it directly names the property. When using square brackets,
 *    the expression between the brackets is evaluated to get the property name. Whereas value.x
 *    fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses
 *    the result as the property name. So if you know that the property you are interested in is called
 *    “length”, you say value.length . If you want to extract the property named by the value held in
 *    the variable i , you say value[i] . And because property names can be any string, if you want to
 *    access a property named “2” or “John Doe”, you must use square brackets: value[2] or value["John Doe"].
 *    This is the case even though you know the precise name of the property in advance, because neither
 *    “2” nor “John Doe” is a valid variable name and so cannot be accessed through dot notation.
 * Methods:
 *  - Both string and array objects contain, in addition to the length property, a number of properties
 *  	that refer to function values. ex:
 *  	var doh = "Doh";
 *  	console.log(typeof doh.toUpperCase); // → function
 *  	console.log (doh.toUpperCase ()); // → DOH
 * Objects:
 *  - Values of the type object are arbitrary collections of properties, and we can add or remove these
 *  	properties as we please. One way to create an object is by using a curly brace notation.
 *  	var day1 = {
 *  		squirrel : false,
 *  	 	events : [ "work", "touched tree", "pizza", "running", "television" ]
 *  	};
 *  	console.log(day1.squirrel); // → false
 *  	console.log(day1.wolf); // → undefined
 *  	day1.wolf = false;
 *  	console.log(day1.wolf); // → false
 *  - This means that curly braces have two meanings in JavaScript. At the start of a statement, they
 *  	start a block of statements. In any other position, they describe an object. Fortunately, it is
 *  	almost never useful to start a statement with a curly-brace object, and in typical programs, there
 *  	is no ambiguity between these two uses.
 * Mutability:
 *  - The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all
 *  	immutable —it is impossible to change an existing value of those types. You can combine them and
 *  	derive new values from them, but when you take a specific string value, that value will always remain
 *  	the same. The text inside it cannot be changed. If you have reference to a string that contains "cat",
 *  	it is not possible for other code to change a character in that string to make it spell "rat" . With
 *  	objects, on the other hand, the content of a value can be modified by changing its properties. When we
 *  	have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer
 *  	to the same physical bits. But with objects, there is a difference between having two references to the
 *  	same object and having two different objects that contain the same properties. ex:
 *  	var object1 = { value: 10 };
 *  	var object2 = object1;
 *  	var object3 = { value: 10 };
 *  	console.log(object1 == object2); // → true
 *  	console.log(object1 == object3); // → false
 *  	object1.value = 15 ;
 *  	console.log(object2.value); // → 15
 *  	console.log(object3.value); // → 10
 *  	The object1 and object2 variables grasp the same object, which is why changing object1 also changes the
 *  	value of object2 . The variable object3 points to a different object, which initially contains the same
 *  	properties as object1 but lives a separate life.
 */
