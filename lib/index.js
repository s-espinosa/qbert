var Start = require('./start');
var start = new Start();
var $     = require('jQuery');

var startMenu     = $("#start-menu");
var endMenu       = $("#end-menu");
var startButton   = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");

startButton.addEventListener('click', function(){
  startMenu.fadeOut('slow');
  start.startGame();
});

restartButton.addEventListener('click', function() {
  endMenu.fadeOut('slow');
  start.startGame();
});
