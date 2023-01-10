setInterval(function() {
  // Get the current time
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Convert the hours to civilian time
  var civilianHours = (hours % 12) || 12;

  var ampm = "AM";
  if (hours > 11) {
    ampm = "PM";
  }
  // Add a leading zero to the minutes and seconds if needed
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  // Display the time in the console
  console.clear();
  console.log(civilianHours + ":" + minutes + ":" + seconds +" "+ampm);
}, 1000);
