var Game = require('./game');
var game = new Game();
var $    = require('jQuery');
var standings = require('./standings');

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

  let games = standings.get;

  if(input.player !== ""){
    games = standings.update(input);
  }

  prepareTopScoreHeader();

  games.forEach(function(game){
    prepareTopScores(game);
  });

  topScores.innerHTMl += "</table>";

  revealTopScores();
});

function prepareTopScoreHeader(){
  topScores.innerHTML = "<h4>TOP SCORES</h4><table id='scores-table'><tr><td></td><td></tr>";
}

function prepareTopScores(game){
  topScores.innerHTML = topScores.innerHTML + "<tr><td class='names-col'>" + game.player + "</td><td class='scores-col'> " + game.totalScore + "</td></tr>";
}

function revealTopScores(){
  scoreForm.fadeOut('fast');
  topScoresMenu.fadeIn('slow');
  $('#initials').val("");
}
