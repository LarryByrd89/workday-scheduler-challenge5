// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const localeSettings = {};
dayjs.locale(localeSettings);

$(function () {
  // TODO: Add code to display the current date in the header of the page.

  const currentHour = dayjs().format('H');



  function hourlyColor() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour === currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });

    function updateTime() {
      const dateElement = $('#date');
      const timeElement = $('#time');
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      const currentTime = dayjs().format('hh:mm:ss A');
      dateElement.text(currentDate);
      timeElement.text(currentTime);
     }

    function refreshColor() {
      $('.time-block').each(function() {
        const blockHour = parseInt(this.id);
      }

  hourlyColor();
  setInterval(updateTime, 1000);

});
