var dateAndTime = $('#currentDayTime');

function displayTimeDate() {
    var rightNow = moment().format('dddd MMMM Do YYYY, HH:mm:ss');
    dateAndTime.text(rightNow);
}

setInterval(displayTimeDate, 1000);




// user loads in and sees days plans should they exist
// get tasks from local storage
//displaye tasks to HTML
// user sees different colors based on current time
// if Else to check moment, and then swap the class
// alternative use switch statement
// user enters new task, and it's saved in local storage
// setItems in local storage

function saveButton(arg) {
    localStorage.setItem(arg, document.getElementById(arg).value)
}

for (let i = 9; i < 16; i++) {
    if (localStorage.getItem(i) != null){
        document.getElementById(i).value = localStorage.getItem(i)
    }
}



var checkHour = function () {    
    var currentTime = moment().hour();   
    var timeBlocks = $(".time-block");
    for (var i = 0 ; i < timeBlocks.length ; i++) {        
        var hourID = timeBlocks[i].id;       
        var newID = document.getElementById(timeBlocks[i].id);
        $(timeBlocks[i].id).removeClass(".present .past .future");
        if (hourID < currentTime) {
            $(newID).addClass("past");
        } else if (hourID > currentTime) {
            $(newID).addClass("future");
        } else {
            $(newID).addClass("present");
        }
    }
}


checkHour()
setInterval(checkHour, (1000*60)*15);



