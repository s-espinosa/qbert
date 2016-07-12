var Game = require('./game');
var game = new Game();
var $    = require('jQuery');

var startMenu     = $("#start-menu");
var endMenu       = $("#end-menu");
var startButton   = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");
var initialsButton = document.getElementById("initials-button");

startButton.addEventListener('click', function(){
  startMenu.fadeOut('slow');
  game.setInput();
  game.startGame();
});

restartButton.addEventListener('click', function() {
  game.resetGame();
  endMenu.fadeOut('slow');
});

initialsButton.addEventListener('click', function(){
  var input = {
		'player': $('#initials').text(),
		'totalScore': $('#game-score').text()
	};

  var lsGames = localStorage.getItem('games') || '[]';
  var games = JSON.parse(lsGames);

	games.push(input);
	localStorage.setItem('games', JSON.stringify(games));
});
