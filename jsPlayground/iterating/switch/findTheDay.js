var myDate = function(callback) {
  var input = ['10/11/2009', '11/10/2010', '-1'];

	// loop through list and apply callback to EACH item
  for (var i = 0; i < input.length; i++) {
  	callback(input[i]);
	}
};

function findDay(dateString) {
    if (dateString != -1) {
        var date = new Date(dateString), day = "";
        switch (date.toDateString().slice(0,3)) { //Pick the first 3 characters of a date string
            case "Sun":
                day = "Sunday";
                break;
            case "Mon":
                day = "Monday";
                break;
            case "Tue":
                day = "Tuesday";
                break;
            case "Wed":
                day = "Wednesday";
                break;
            case "Thu":
                day = "Thursday";
                break;
            case "Fri":
                day = "Friday";
                break;
            default:
                day = "Saturday";
                break;
        }
        console.log(day);
    }
    else{
        console.log(dateString + ' is not a valid date'); //If input is -1
    }
}

myDate(findDay);

/*
// another way to solve this problem without a switch statement
var input = ['10/11/2009', '11/10/2010', '-1'],
    output = input.map(findDay); // iterator with callback

function findDay(myDate) { // callback
    var date,
        days = { Sun: 'Sunday', Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday' };
    if (myDate !== '-1') { // <-- changed to string!
        date = new Date(myDate);
        return days[date.toDateString().slice(0, 3)];
    }
    return myDate + ' is not a valid date';
}

document.write('<pre>' + JSON.stringify(output, 0, 4) + '</pre>');
 */

/*
// another way to solve this problem without a switch statement
function findmyDate ( input ) {
	input.forEach( function (myDate,k) {

    if (myDate !== '-1') {
        var date = new Date(myDate), day = "";
        switch (date.toDateString().slice(0,3)) { //Pick the first 3 characters of a date string
            case "Sun":
                day = "Sunday";
                break;
            case "Mon":
                day = "Monday";
                break;
            case "Tue":
                day = "Tuesday";
                break;
            case "Wed":
                day = "Wednesday";
                break;
            case "Thu":
                day = "Thursday";
                break;
            case "Fri":
                day = "Friday";
                break;
            default:
                day = "Saturday";
                break;
        }
        console.log(day);
    }
    else{
        console.log(myDate + ' is not a valid date'); //If input is -1
    }

  });
}



findmyDate( ['10/11/2009', '11/10/2010', '-1'] );
 */

/*
// hackerrank 7 days solution
if (myDate !== -1) {
        var date = new Date(myDate), day = "";
        switch (date.toDateString().slice(0,3)) { //Pick the first 3 characters of a date string
            case "Sun":
                day = "Sunday";
                break;
            case "Mon":
                day = "Monday";
                break;
            case "Tue":
                day = "Tuesday";
                break;
            case "Wed":
                day = "Wednesday";
                break;
            case "Thu":
                day = "Thursday";
                break;
            case "Fri":
                day = "Friday";
                break;
            default:
                day = "Saturday";
                break;
        }
        console.log(day);
    }
    else{
        process.end(); //If input is -1
    }
}
 */
