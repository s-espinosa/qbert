var Game = require('./game');
var game = new Game();
var $    = require('jQuery');

var startMenu     = $("#start-menu");
var endMenu       = $("#end-menu");
var startButton   = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");

startButton.addEventListener('click', function(){
  startMenu.fadeOut('slow');
  game.setInput();
  game.startGame();
});

restartButton.addEventListener('click', function() {
  endMenu.fadeOut('slow');
  game.resetGame();
});
