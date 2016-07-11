var EndGame = require('./end_game');
var Ball    = require('./ball');

function Draw(params) {
  this.context    = params['context'];
  this.canvas     = params['canvas'];
  this.qbert      = params['qbert'];
  this.board      = params['board'];
  this.score      = params['score'];
  this.characters = [this.qbert];
  this.enemies    = [];
  this.tick       = 0;
  this.enemyFreq  = 500;
}

Draw.prototype.drawFrame = function(){
  this.clearContext();
  this.updateCharacters();
  this.drawCharacters();
  this.detectCollisions();
  this.addEnemies();
  this.tick++;
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

Draw.prototype.detectCollisions = function() {
  var qbert = this.qbert;

  this.enemies.forEach(function(enemy){
    var xDistance = enemy.x - qbert.x;
    var yDistance = enemy.y - qbert.y;
    var distance  = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));

    if(distance < 20){
      console.log(enemy.currentPosition);
      qbert.die();
    }
  });
};

Draw.prototype.addEnemies = function(){
  if(this.tick !== 0 && this.tick % this.enemyFreq === 0){
    var ball = new Ball({board: this.board, context: this.context});
    this.characters.push(ball);
    this.enemies.push(ball);
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
