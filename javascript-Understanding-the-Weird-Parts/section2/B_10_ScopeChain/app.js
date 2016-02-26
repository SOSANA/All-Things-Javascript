/*
 * Ask the question who created me? when thinking of lexical environment and scope chaining
 * during the create phase of execution context. Where a function sits, determines its outter
 * environment reference but as its being executed those execution context are stacking up
 * and its running synchronous
 */

function a() {
  
  function b() {
	  console.log(myVar);
  }
  
  var myVar = 2;
	b();
}

var myVar = 1;
a();