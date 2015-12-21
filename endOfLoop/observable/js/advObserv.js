/**
 *  - rx library is used which is a set of libraries to compose asynchronous and
 *    event-based programs using observable collections and Array#extras style
 *    composition in JavaScript
 * -  observables data is asynchronous which arrive over time. No data is stored
 * 		in memory rather than a normal array which stores its data in memory
 */
var Rx = require('rx');
var Observable = Rx.Observable;
// grabbing ref to parent and widget elements
var parent = document.getElementById("parent");
var widget = document.getElementById("widget");

// converting the mouse events to observables so we can combine them together
// using the map(), filter(), concatAll(), forEach() methods
var mouseDowns = Observable.fromEvent(widget, "mousedown");
var parentMouseMoves = Observable.fromEvent(parent, "mousemove");
var parentMouseUps = Observable.fromEvent(parent, "mouseup");

// remember a two dimensional collection
// [1,2,3].map(function(item){ return [1,2];}) // [[1,2], [1,2]]

// we take our old collection and create a new collection, collection of all the
// drags on the widget. We then return all the mouse downs and map over them.
// for every mouse down thatoccurs we return all the mouse moves that we detect
// on the parent. But before returning the collection we reduce the amount of
// collections by using a new method called takeUntil() which returns all the
// items in a source collection, in this case parentMouseMoves. But it completes
// the collection as soon as an item is detected in another collection, in this
// case a stop collection, so we get all the parentMouseMoves until the next
// parentMouseUps. So for each mousedown we are returning all the subsequent
// parentMouseMoves detected on the parent until a parentMouseUps is detected
// on the parent. This is a two dimensional collection
var drags =
  mouseDowns.
    map(function(e) {
      return parentMouseMoves.
        takeUntil(parentMouseUps);
    }).
    concatAll();

// accepts 3 callbacks, 1st is for data that arrives, 2nd is for error, and
// 3rd is for async collection completes
var subscription =
  drags.forEach(
    function onNext(e) {
      widget.style.left = e.clientX + "px";
      widget.style.top = e.clientY + "px";
    },
    function onError(error) {
      console.log('error');
    },
    function onCompleted() {
      // will never end as events will always be fired off, observables can end
      // for example sockets and asynchronous computation
    });
