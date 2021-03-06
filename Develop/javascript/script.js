// declare variable for each line of time on the scheduler
var myPlannerTime = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
   
]

// current day -> top of the calendar (header)
    // moment library - .format()
function getTodayDate() {
    var currentTodayDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentTodayDate);
}

// setItems in local Storage to save - UNIT 04
function saveReminders() {
    localStorage.setItem("myPlannerTime", JSON.stringify(myPlannerTime));
}

// get the data from localStorage and populate the timeblocks
// .val() to update based on what we get from local storage hour 9 .val get ;
// .val() = localStorage.getItem('parentID')
function displayReminders() {
    myPlannerTime.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

function init() {
    var storedPlannerTime = JSON.parse(localStorage.getItem("myPlannerTime"));

    if (storedPlannerTime) {
        myPlannerTime = storedPlannerTime;
    }

    saveReminders();
    displayReminders();
}

// loads that date in the header 
getTodayDate();

// create the visuals for the body of the scheduler
myPlannerTime.forEach(function(thisHour) {
    // create all of the timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // create all of the time field
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    // use the moment library to get the current hour
    // get a reference to all timeblocks
    // loop through the timeblocks - UNIT 03
        // get the data-hr value timeblocks[i].data('hour')

        // if, else statement - condition we compare the currentHour with the timeBlock
        // if the time is < (past), === (present), else (future)

        // adding or removing (or both) classes form our timeblock - UNIT 03
    var hourTask = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
        // reference to the textArea (id)
    var taskData = $("<textarea>");
    hourTask.append(taskData);
    taskData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        taskData.attr ({
            "class": "past",
        })
    } else if (thisHour.time === moment().format("HH")) {
        taskData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        taskData.attr({
            "class": "future"
        })
    }

    // Create the save button and get a reference to all of the save buttons $('.saveBtn')
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var saveTask = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    saveTask.append(saveButton);
    hourRow.append(hourField, hourTask, saveTask);
})

// loads all localstorage data after data is created
init();

// function inside an event handle, its a click event
// .on uses add - add a click handler to each save Button using .on() method
// value of the input next to the button - DOM traversal; traverse the DOM to get the values we need to store in localStorage .parent() but use .sibling()

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children("textarea").attr("id");
    console.log(saveIndex);
    myPlannerTime[saveIndex].reminder = $(this).siblings(".description").children("textarea").val();
    
    console.log(myPlannerTime[saveIndex]); 
    saveReminders();
    displayReminders();
})