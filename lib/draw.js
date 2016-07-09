var EndGame = require('./end_game');

function Draw(params) {
  this.qbert = params['qbert'];
}

Draw.prototype.drawFrame = function(){
  if(this.qbert.position === null) {
    var endGame = new EndGame();
    endGame.end();
  } else {
    var draw = this;
    window.requestAnimationFrame(function() {draw.drawFrame();});
  }

};

module.exports = Draw;
