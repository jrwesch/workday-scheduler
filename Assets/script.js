$(document).ready(function () {

    // TODO: Add code to display the current date in the header of the page.

    // gets current date from Day.js and displays it
    var todaysDate = dayjs().format('ddd[, ]MMMM-D-YYYY[ at ]h:mm[ ]a');
    var displayDate = document.getElementById('currentDay');
    
    displayDate.innerHTML = todaysDate;
    

     // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    //compares each time slot's hour with current hour from Day.js
    $(".time-block").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1];
        var currentHour = dayjs().hour();
        
        if (currentHour == timeDiv) {
          $(this).addClass("present");
          $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
          $(this).removeClass("present");
          $(this).addClass("future");
        } else if (currentHour > timeDiv) {
          $(this).removeClass("future");
          $(this).addClass("past");
        }
      }); 

    //reset button function to clear local storage and contents
    $("#resetButton").click(function (event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
      });


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    // adds listener for click events on save button, saves to local storage
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
      });

      // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

      $("#hour-09 textarea").val(localStorage.getItem(["09"]));
      $("#hour-10 textarea").val(localStorage.getItem(["10"]));
      $("#hour-11 textarea").val(localStorage.getItem(["11"]));
      $("#hour-12 textarea").val(localStorage.getItem(["12"]));
      $("#hour-13 textarea").val(localStorage.getItem(["13"]));
      $("#hour-14 textarea").val(localStorage.getItem(["14"]));
      $("#hour-15 textarea").val(localStorage.getItem(["15"]));
      $("#hour-16 textarea").val(localStorage.getItem(["16"]));
      $("#hour-17 textarea").val(localStorage.getItem(["17"]));

       
    });


   

    
 