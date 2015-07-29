/**
 * common example of a closure found on internet
 */
function buildFunctions() {
  // called free variables, outside a function but you have access too
  var arr = [];
  
  for ( var i = 0; i < 3; i++) {
    arr.push(
      function() {
        console.log(i);
      }
    )
  }
  
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
  
  var arr = [];
  
  for ( var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }
  
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();