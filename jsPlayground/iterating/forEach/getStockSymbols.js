/**
 * - using foreach method
 * - useful if you want to do something to every item in the array
 * - runs asynchronously
 * - accepts a closure and invokes that closure for every item in the array and passes
 *   in that item as an argument to the closure
 * - really convenient if you want to do something to every item in an array
 */

/* eslint-disable */
 // 'getStockSymbols' function, job is to get an array of stocks, pull out the symbol from
 // each one of those stocks and put all the symbols in an array and then return it
function getStockSymbols(stocks) {
  var symbols = [];

  // this works exactly like our for loop
  stocks.forEach(function(stock) {
    symbols.push(stock.symbol);
    //symbols.push(stock.symbol, stock.volume);
    //symbols.push(stock.volume);
  })

  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));
