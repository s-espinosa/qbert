var EndGame = require('./end_game');

function Draw(params) {
  this.qbert = params['qbert'];
  this.ball = params['ball'];
}

Draw.prototype.drawFrame = function(){
  if(this.qbert.lives === 0) {
    var endGame = new EndGame();
    endGame.end();
  } else {
    var draw = this;
    window.requestAnimationFrame(function() {draw.drawFrame();});
  }
};

module.exports = Draw;
