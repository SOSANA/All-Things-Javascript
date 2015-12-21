/**
 * advanced flattening
 * 	- flattening by using the concatAll() method, but only works on two dimensional
 * 		arrays.
 */
 var Rx = require('rx');
 var Observable = Rx.Observable;
 // this is a 3 dimensional array. 1st is exchanges, 2nd is object for each
 // exchange which contain array of stocks, 3rd is within each stock we have an
 // array of stock close dates
 var exchanges = [
   {
     name: "NYSE",
     stocks: [
       {
         symbol: "XFX",
         closes: [
           { date: new Date(2014,11,24), price: 240.10 },
           { date: new Date(2014,11,23), price: 232.08 },
           { date: new Date(2014,11,22), price: 241.09 }
         ]
       },
       {
         symbol: "TNZ",
         closes: [
           { date: new Date(2014,11,24), price: 521.24 },
           { date: new Date(2014,11,23), price: 511.00 },
           { date: new Date(2014,11,22), price: 519.29 }
         ]
       },
     ]
   },
   {
     name: "TSX",
     stocks: [
       {
         symbol: "JXJ",
         closes: [
           { date: new Date(2014,11,24), price: 423.22 },
           { date: new Date(2014,11,23), price: 424.84 },
           { date: new Date(2014,11,22), price: 419.72 }
         ]
       },
       {
         symbol: "NYN",
         closes: [
           { date: new Date(2014,11,24), price: 16.82 },
           { date: new Date(2014,11,23), price: 16.12 },
           { date: new Date(2014,11,22), price: 15.77 }
         ]
       },
     ]
   }
 ];

 Array.prototype.concatAll = function() {
   var results = [];

   this.forEach(function(subArray) {
     subArray.forEach(function(item) {
       results.push(item);
     });
   });

   return results;
 };
 //[1,2,3].map(function(num) { return num + 1; }) -> [2,3,4]
 //[1,2].map(function(num) { return [num + 1, num + 2]; }) -> [[2,3],[3,4]]
 // need to use two concatAll() to change it from 2 dimensional to 3 dimensional
 // array collection. Could also use flatMap() instead of concatAll(), works the
 // same
 var christmasEveCloses =
   exchanges.
     map(function(exchange) {
       return exchange.stocks.
         map(function(stock) {
           return stock.closes.
             filter(function(close) {
               return close.date.getMonth() === 11 &&
                 close.date.getDate() === 24;
             }).
             map(function(close) {
               return {
                 symbol: stock.symbol,
                 price: close.price
               };
             });
         }).
         concatAll();
     }).
     concatAll();

 christmasEveCloses.forEach(function(christmasEveClose) {
   console.log(christmasEveClose);
 });
