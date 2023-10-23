$(function () {
  
  // event listener for save button
  $(".saveBtn").on("click", function() {
    console.log("saveBtn works")
    var time = $(this).parent().attr("id");
    console.log(time);

    var text = $(this).siblings(".description").val();
    console.log(text);

    localStorage.setItem(time, text);
  });
  
  // applying past/present/future class to each time block according to real time
  function timeBlockUpdate () {
    var currentHour = dayjs().hour();
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);
      if (blockHour < currentHour) {
        $(this).addClass("past");

      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");

      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  };
 
  timeBlockUpdate();
  
  // storing user input from each time block in local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));

  // displaying current date
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"))

});
