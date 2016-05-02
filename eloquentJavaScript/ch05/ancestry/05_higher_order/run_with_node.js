// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
