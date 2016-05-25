/**
 * A vector type:
 *  - Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers),
 *  	which it should save to properties of the same name
 *  - Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector
 *  	that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values
 *  - Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point
 *  	(x, y) from the origin (0, 0)
 *
 * Hints:
 *  - Your solution can follow the pattern of the Rabbit constructor from this chapter quite closely
 *  - Adding a getter property to the constructor can be done with the Object.defineProperty function. To compute the distance
 *  	from (0, 0) to (x, y), you can use the Pythagorean theorem, which says that the square of the distance we are looking for
 *  	is equal to the square of the x-coordinate plus the square of the y-coordinate. Thus, √(x2 + y2) is the number you want,
 *  	and Math.sqrt is the way you compute a square root in JavaScript
 */
