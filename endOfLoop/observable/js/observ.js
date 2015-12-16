/**
 *  - rx library is used which is a set of libraries to compose asynchronous and
 *    event-based programs using observable collections and Array#extras style
 *    composition in JavaScript
 * -  observables data is asynchronous which arrive over time. No data is stored
 * 		in memory rather than a normal array which stores its data in memory
 */
var Rx = require('rx');
var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
var handler = function(e) {
  alert('clicked!');
  button.removeEventListener('click', handler);
};
button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, 'click');

var subscription =
	clicks.forEach(
		function onNext(e) {
			alert('clicked');
			subscription.dispose();
		},
		function onError(error) {
			console.log('ERROR!');
		},
		function onCompleted() {
			console.log("done");
		});
