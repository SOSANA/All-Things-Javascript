/**
 * JSON:
 * - JSON (pronounced “Jason”), which stands for JavaScript Object Notation. It is widely used as a data
 * 	 storage and communication format on the Web
 * - All property names have to be surrounded by double quotes, and only simple data expressions are
 *   allowed—no function calls, variables, or anything that involves actual computation. Comments are
 *   not allowed in JSON
 * - JavaScript gives us functions, JSON.stringify and JSON.parse, that convert data from and to this format.
 * 	 The first takes a JavaScript value and returns a JSON-encoded string. The second takes such a string and
 * 	 converts it to the value it encodes.
 * 	 - JSON.stringify converts from JavaScript to JSON
 * 	 - JSON.parse converts from JSON to JavaScript
 */

/* eslint-disable */
'use strict';

var string = JSON.stringify({ name: 'SOSANA', born: 1982 });
console.log(string); // {"name":"SOSANA","born":1982}
console.log(JSON.parse(string).born); // 1982
console.log(JSON.parse(string).name); // SOSANA
