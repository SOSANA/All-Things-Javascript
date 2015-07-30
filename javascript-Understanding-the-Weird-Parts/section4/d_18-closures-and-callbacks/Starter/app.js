/**
 * Thanks to closures we still have greeting in memory and console.log(greeting)
 * runs 3 seconds later even though sayHiLater() finished running already
 */
function sayHilater() {
  
  var greeting = 'Hi!';
  
  // making use of first calls functions
  // and we are creating a function on the fly so we are taking advantage
  // of a function expression
  // this is called a callback 
  setTimeout(function() {
    
    console.log(greeting);
    
  }, 3000);
}

sayHilater();

// jQuery uses function expressions and first-class functions!
/*
$("button").click(function() {
  
});
*/

function tellMeWhenDone(callback) {
  var a = 1000; // some work
  var b = 2000; // some work
  
  callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function() {
  console.log('I am done!');
});

tellMeWhenDone(function() {
  console.log('I am done...');
});


