// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
  // answer: The `this` is used for calls to a given function 
  //How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? 
  // answer: The DOM traversing can be used to select the attribute assign to the parent
  //How might the id be useful when saving the description in local storage?
  // Answer: the id would be useful when saving into the localstorage by being able to selet the attribute related the the parent 
  $('.saveBtn').on('click', function() {
    var time = $(this).parent().attr('id');
    var description = $(this).siblings('.description').val();

    localStorage.setItem(time, description)
  });
  //
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  //answer: Th id attribute can be used highlight with red , green or gray depending on the current time that we are on 
  //How can Day.js be used to get the
  // current hour in 24-hour time?
  // answer: since day.js is a a library it can be used to get the current time of the day.
 
function updatedHour() {

    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var blockedHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockedHour < currentHour) {
        $(this).addClass('past');
      } else if (blockedHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  updatedHour();
  
  setInterval(updatedHour, 15000);
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // answer: the id can be used to have the value of each section be stored in the local storage and save with-in the web page
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});


