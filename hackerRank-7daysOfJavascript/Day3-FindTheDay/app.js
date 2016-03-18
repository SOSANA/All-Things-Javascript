var myDate = ['10/11/2009', '11/10/2010', '-1'];

function findmyDate ( myDate ) {
	myDate.forEach( function (myDate) {

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



findmyDate( myDate );

/*
// offical solution
function findDay ( myDate ) {

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
        console.log(myDate); //If input is -1
    }
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var dates = _input.split('\n');

    for (var i = 0; i < dates.length - 1; i++) {
        findDay(dates[i]);
    }
});
*/
