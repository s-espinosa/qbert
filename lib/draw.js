var EndGame = require('./end_game');

function Draw(params) {
  this.context    = params['context'];
  this.canvas     = params['canvas'];
  this.qbert      = params['qbert'];
  this.characters = [this.qbert];
}

Draw.prototype.drawFrame = function(){
  this.clearContext();
  this.updateCharacters();
  this.drawCharacters();
  this.checkEnd();
};

Draw.prototype.clearContext = function(){
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Draw.prototype.updateCharacters = function() {
  this.characters.forEach(function(character) {
    character.update();
  });
};

Draw.prototype.drawCharacters = function() {
  this.characters.forEach(function(character) {
    character.draw();
  });
};

Draw.prototype.checkEnd = function() {
  if(this.qbert.lives === 0) {
    var endGame = new EndGame();
    endGame.end();
  } else {
    var self = this;
    window.requestAnimationFrame(function() {
      self.drawFrame();
    });
  }
};

module.exports = Draw;
