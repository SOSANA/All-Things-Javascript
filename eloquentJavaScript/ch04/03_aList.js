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
 * value: 1
 * rest:   → value: 2
 *           rest:   → value: 3
 *           					 rest: null
 */

/* eslint-disable */
