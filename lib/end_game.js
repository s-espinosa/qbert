var $ = require('jQuery');

function EndGame() {
  this.endMenu = $("#end-menu");
}

EndGame.prototype.end = function(){
  this.endMenu.fadeIn('slow', function(){clearCharacter();});
};

function clearCharacter(){
  var canvas  = document.getElementById("charCanvas");
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = EndGame;
