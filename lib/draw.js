var EndGame = require('./end_game');
var Ball    = require('./ball');

function Draw(params) {
  this.context    = params['context'];
  this.canvas     = params['canvas'];
  this.qbert      = params['qbert'];
  this.board      = params['board'];
  this.characters = [this.qbert];
  this.tick       = 0;
  this.enemyFreq  = 500;
}

Draw.prototype.drawFrame = function(){
  this.clearContext();
  this.updateCharacters();
  this.drawCharacters();
  this.addEnemies();
  this.tick++;
  console.log(this.characters);
  this.checkEnd();
};

Draw.prototype.clearContext = function(){
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Draw.prototype.updateCharacters = function() {
  var characters = this.characters;
  characters.forEach(function(character) {
    if(character.hasOwnProperty("alive")){
      if(!character.alive){
        var index = characters.findIndex(function(){character});
        characters.splice(index, 1);
      }
    }
  });

  var currentTick = this.tick;
  this.characters.forEach(function(character) {
    character.update(currentTick);
  });
};

Draw.prototype.drawCharacters = function() {
  this.characters.forEach(function(character) {
    character.draw();
  });
};

Draw.prototype.addEnemies = function(){
  if(this.tick !== 0 && this.tick % this.enemyFreq === 0){
    var ball = new Ball({board: this.board, context: this.context});
    this.characters.push(ball);
  }
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
