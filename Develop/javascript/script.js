// button
    // function inside an event handle, its a click event
    // get a reference to all of the save buttons $('.saveBtn')
    // what is a psuedo code?

    // .on uses add - add a click handler to each save Button using .on() method
    // 03 and 04 click events

    // value of the input next to the button - DOM traversal; traverse the DOM to get the values we need to store in localStorage .parent() but use .sibling()
    // 07 AND 08 DOM traversal

    // setItems in local Storage to save - UNIT 04

// handle color coding
    // use the moment library to get the current hour

    // get a reference to all timeblocks

    // loop through the timeblocks - UNIT 03
        // get the data-hr value timeblocks[i].data('hour')

        // if, else statement - condition we compare the currentHour with the timeBlock
        // if the time is < (past), === (present), else (future)

        // adding or removing (or both) classes form our timeblock - UNIT 03

// get the data from localStorage and populate the timeblocks
    // getItem

    // reference to the textAres (id)

    //  .val() to update based on what we get from local storage hour 9 .val get ;

    // approaches -> jQuery $('textarea'); crate and array-> loop through that -> get a reference to the id of .parent()
    // .val() = localStorage.getItem('parentID')

// current day -> top of the calendar
    // moment library - .format()


// call the colorCoding function -> an init?
// setInterval -> 15000 every 15 seconds chack and run the code again - UNIT 04