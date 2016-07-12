var $ = require('jQuery');
var Standings = require('./standings');

function EndGame(score) {
  this.endMenu = $("#end-menu");
  this.score = score;
  this.standings = new Standings();
}


EndGame.prototype.end = function(){
  $('#game-score').text(this.score.total);
  this.endMenu.fadeIn('slow', function(){clearCharacter();});
  this.standings.display();
};

function clearCharacter(){
  var canvas  = document.getElementById("charCanvas");
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// EndGame.prototype.selectElement = function(){
//
// }
// document.getElementById('initials-button').addEventListener('click', function(){
//
// }, false);


EndGame.prototype.updateStandings = function(){
  var player = $('#initials').text();
  var score = $('#game-score').text();
  this.standings.addGame(player, totalScore);
}

module.exports = EndGame;
