$(function () {
  // current hour saves
  var currentHour = Number(dayjs().format('H'));

  // loops through to adds/remove a class if their id is the current hour */
  $('.time-block').each(function() {
    // converts string to number
    var hourValue = Number($(this).attr("id"));
    if (currentHour > hourValue) {
      $(this).removeClass("present future").addClass("past");
    } else if (currentHour < hourValue) {
      $(this).removeClass("past present").addClass("future");
    } else {
      $(this).removeClass("past future").addClass("present");
    }
  });

  // current date
  var currentTime = dayjs().format('dddd, MMM D');
  $('#display-4').text(currentTime);
  $(".saveBtn").on("click", saveToLocalStorage);

  function saveToLocalStorage() {
    var blockId = $(this).parent().attr("id");
    var blockDescription = $(this).siblings(".description").val();
    // saves description
    localStorage.setItem(blockId, blockDescription);
  }

  // sets the description box to have a value of the item ids
  for (var i = 9; i <= 16; i++) {
    // template literal to inject the variable into a string
    $(`#${i} .description`).val(localStorage.getItem(`${i}`))
  }
});