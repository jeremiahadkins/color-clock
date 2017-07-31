function clock () {
  // defining vars
  var time = new Date();
  var timeHours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  var timeMinutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  var timeSeconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  var timeSplit = timeHours + ":" + timeMinutes + ":" + timeSeconds;

  // setting time
  $(".current-time").html(timeSplit);
  
  // defining percentage
  var roundedTimeSeconds = parseFloat((timeSeconds/60).toFixed(2));
  var roundedTimeSecondsToInt= (roundedTimeSeconds * 100).toString();

  // console log percentage
  console.log(roundedTimeSecondsToInt);

  // setting width = 'initial'
  $(".time-bar").css("width", roundedTimeSecondsToInt + "%");

  var timeToColor = function(a,b,c){
    var concatTimes = a.toString() + b.toString() + c.toString();
    console.log('concat times', concatTimes); 
    return concatTimes;
  }

  $('body').css("background-color", timeToColor(timeSeconds, timeMinutes, timeHours));

  console.log(typeof(timeToColor(timeSeconds, timeMinutes, timeHours)));
}

// function call on timer
window.setInterval(clock, 1000);
