(function () {

  var intervalId = 0;
  var displayClock = document.querySelector(".current-time");
  var mouseIsHovering= false;

  function timeToHex (h, m, s) {
    var timeHex = "#" + s.toString() + m.toString() + h.toString();
    return timeHex;
  }

  function hoverHex(display) {
    displayClock.textContent = display;
  }

  function printTime () {
    var currentTime = new Date();
    var hours = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours();
    var minutes = currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes();
    var seconds = currentTime.getSeconds() < 10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds();

    var hexedTime = timeToHex(hours, minutes, seconds);

    if (mouseIsHovering) {
      displayClock.textContent = hexedTime;
    } else {
      displayClock.textContent = hours + ":" + minutes + ":" + seconds;
    }

    $('body').css("background-color", hexedTime);

    var percentage = parseFloat((seconds/60).toFixed(2));
    var percentageToInt = (percentage * 100).toString();

    $(".time-bar").css("width", percentageToInt + "%");
  }

  
  function hoverHex () {
    mouseIsHovering = true;
  }

  function noHoverHex () {
    mouseIsHovering = false;
  }


  displayClock.addEventListener('mouseenter', hoverHex);
  displayClock.addEventListener('mouseout', noHoverHex);

  intervalId = window.setInterval(printTime, 100);

  setInterval(printTime, 1000);
})();
