var Start = require('./start');
var start = new Start();

var startMenu     = document.getElementById("start-menu");
var endMenu       = document.getElementById("end-menu");
var startButton   = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");

startButton.addEventListener('click', function(){
  fade(startMenu);
  start.startGame();
});

restartButton.addEventListener('click', function() {
  fade(endMenu);
  start.startGame();
});

function fade(element) {
   var op = 1;  // initial opacity
   var timer = setInterval(function () {
       if (op <= 0.1){
           clearInterval(timer);
           element.style.display = 'none';
       }
       element.style.opacity = op;
       element.style.filter = 'alpha(opacity=' + op * 100 + ")";
       op -= op * 0.1;
   }, 50);
}
