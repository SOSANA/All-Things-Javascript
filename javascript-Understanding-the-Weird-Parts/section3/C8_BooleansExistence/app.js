/**
 * using coercion to check for booolean existence
 */
var a;

// goes to internet and looks for a value
a = 0;
if (a || a === 0) {
  console.log('Something is there.');
}
