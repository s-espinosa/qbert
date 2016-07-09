var EndGame = require('./end_game');

function Draw(params) {
  this.qbert = params['qbert'];
}

Draw.prototype.drawFrame = function(){
  console.log(this.qbert.position);
  if(this.qbert.position === null) {
    console.log("position null");
    var endGame = new EndGame();
    endGame.end();
  } else {
    var draw = this;
    window.requestAnimationFrame(function() {draw.drawFrame();});
  }

};

module.exports = Draw;
