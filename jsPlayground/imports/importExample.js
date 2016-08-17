/**
 * for more good examples and explanations:
 *  - src: https://www.exratione.com/2015/12/es6-use-of-import-property-from-module-is-not-a-great-plan/
 */

/* eslint-disable */

 /* Import a module without any import bindings, just to
    execute its code without assigning any variables here. */
 import 'example';
 // Import the default export of a module.
 import exampleDefaultExport from 'example';
 // Import a named export of a module.
 import { property } from 'example';
 // Import a named export to a different name,
 import { property as exampleProperty } from 'example';
 // Import all exports from a module as properties of an object.
 import * as example from 'example';
 // Export a named variable.
 export var property = 'example property';
 // Export a named function.
 export function property() {}
 // Export an entity to the default export.
 export default 'example default';
 // Export an existing variable.
 var property = 'example property';
 export { property };
 // Export an existing variable as a new name.
 export { property as exampleProperty };
 // Export an export from another module.
 export { property as exampleProperty } from 'example';
 // Export all exports from another module.
 export * from 'example';
 console.log('----------------------------------------------');

 /* Import and Export in ES6 */
// Set the default exported property to { x: 'y' }.
 export default { x: 'y' };
// Set the exported property x to 'y'.
 export var x = 'y';
// This default import obtains an object in the same way as ES5
// require('./example'), but requires that the object was
// explicitly exported as the default.
//
// This is { x: 'y' }.
 import exampleDefault from './example';
// We can see the default as a property on the object returned by
// this form of import.
//
// This is something like: { default: { x: 'y' } }.
 import * as example from './example';

// Things get more interesting without the default export.
//
// This is 'y'.
 import { x } from './exampleProperty';
// This is undefined - it is the default export and this module
// has no default export, only exported properties.
 import examplePropertyDefault from './exampleProperty';
// This is an object, however, in much the same way as ES5
// require('./exampleProperty'), but again requires that the
// export was set up a certain way.
//
// This is { x: 'y' }.
 import * as exampleProperty from './exampleProperty';

// For an empty module:
//
// This, the default export, is undefined.
 import exampleEmptyModuleDefault from './exampleEmptyModule';
// This is {}.
 import * as exampleEmptyModule from './exampleEmptyModule';
