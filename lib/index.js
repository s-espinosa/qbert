var Game = require('./game');
var game = new Game();
var $    = require('jQuery');

var startMenu     = $("#start-menu");
var endMenu       = $("#end-menu");
var startButton   = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");
var initialsButton = document.getElementById("initials-button");
var topScores      = document.getElementById("top-scores");
var topScoresMenu   = $("#top-scores");
var scoreForm      = $("#score-form");

startButton.addEventListener('click', function(){
  startMenu.fadeOut('slow');
  game.startGame();
  game.setInput();
});

restartButton.addEventListener('click', function() {
  game.resetGame();
  endMenu.fadeOut('slow');
});

initialsButton.addEventListener('click', function(){
  var input = {
		'player': $('#initials').val(),
		'totalScore': $('#game-score').text()
	};

  var lsGames = localStorage.getItem('games') || '[]';
  var games = JSON.parse(lsGames);

  if(input.player !== ""){
    games.push(input);
    localStorage.setItem('games', JSON.stringify(games));
  }

  games = games.sort(function(a, b){
    return b.totalScore - a.totalScore;
  }).slice(0, 5);

  topScores.innerHTML = "";

  games.forEach(function(game){
    topScores.innerHTML = topScores.innerHTML + '<li>' + game.player + ": " + game.totalScore + '</li>';
  })

  scoreForm.fadeOut('fast');
  topScoresMenu.fadeIn('slow');

  $('#initials').val("");
});
