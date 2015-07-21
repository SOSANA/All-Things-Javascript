// by value (primitives)
var a = 3;
var b;
// creates a new spot in memory, "b" copy's "a" value 
b = a;
var a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))
var c = { greeting: 'hi'};
var d;
// points to the same spot in memory
d = c;

// here we are mutating the value
c.greeting = 'hello';

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy'};
console.log(c);
console.log(d);
