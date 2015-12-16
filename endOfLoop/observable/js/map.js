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
var clicks = Observable.fromEvent(button, 'click');

var points = clicks.map(function(e) {
  return { x: e.clientX, y: e.clientY };
});

var subscription =
	points.forEach(
		function onNext(point) {
			alert('clicked:' + JSON.stringify(point));
      console.log('clicked:' + JSON.stringify(point));
			subscription.dispose();
		},
		function onError(error) {
			console.log('ERROR!');
		},
		function onCompleted() {
			console.log("done");
		});
