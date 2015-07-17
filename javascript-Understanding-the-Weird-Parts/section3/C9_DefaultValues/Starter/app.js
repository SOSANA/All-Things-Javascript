/**
 * the or function || returns some value, in example below if name is undefined, null, or empty string the or "||" operator
 * returns the default value
 * remember function that return values and 0 = false
 */
function greet(name) {
  // using this one line or expression to set the default value
  name = name || '<Your name here>';
  console.log('Hello ' + name);
}

greet('Jon Doe');
greet();
