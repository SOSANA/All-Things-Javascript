/**
 * The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual
 * properties.
 *
 * Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects
 * with the same properties whose values are also equal when compared with a recursive call to deepEqual.
 *
 * To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties,
 * you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have
 * to take one silly exception into account: by a historical accident, typeof null also produces "object".
 *
 * Hints:
 *  - Your test for whether you are dealing with a real object will look something like typeof x == "object" && x != null.
 *  	Be careful to compare properties only when both arguments are objects. In all other cases you can just immediately
 *  	return the result of applying ===.
 *  - Use a for/in loop to go over the properties. You need to test whether both objects have the same set of property names
 *  	and whether those properties have identical values. The first test can be done by counting the properties in both objects
 *  	and returning false if the numbers of properties are different. If they’re the same, then go over the properties of one
 *  	object, and for each of them, verify that the other object also has the property. The values of the properties are compared
 *  	by a recursive call to deepEqual. Returning the correct value from the function is best done by immediately returning false
 *  	when a mismatch is noticed and returning true at the end of the function.
 */

/* eslint-disable */
