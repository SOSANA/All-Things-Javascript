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
 */

/* eslint-disable */
