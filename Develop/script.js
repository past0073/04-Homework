//Set timer to 75 and decrement 1 per second
var timerEl = document.querySelector("#timer");
var timerText = 75;

function myTimer() {
timerText--;
timerEl.textContent = timerText;
}

var myVar = setInterval(myTimer, 1000);