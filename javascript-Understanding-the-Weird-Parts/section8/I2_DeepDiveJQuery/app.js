/**
 * jQuery is just a giant library full of method and properties, look in console.log __proto__ or src
 * refer to notes in section 6 on method chaining
 */

// this is called method chaining
var q = $("ul.people").addClass("newClass").removeClass("people");
console.log(q);