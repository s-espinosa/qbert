var $ = require('jQuery');

function EndGame(score) {
  this.endMenu = $("#end-menu");
  this.score = score;
}

EndGame.prototype.end = function(){
  $('#game-score').text(this.score.total);
  $('#score-form').show();
  this.endMenu.fadeIn('slow', function(){clearCharacter();});
};

function clearCharacter(){
  var canvas  = document.getElementById("charCanvas");
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = EndGame;
