var EndGame = require('./end_game');
var Ball    = require('./ball');

function Draw(params) {
  this.context    = params['context'];
  this.canvas     = params['canvas'];
  this.qbert      = params['qbert'];
  this.board      = params['board'];
  this.score      = params['score'];
  this.game       = params['game'];
  this.characters = [this.qbert];
  this.enemies    = [];
  this.tick       = 0;
  this.enemyFreq  = 500;
  this.level      = 1;
}

Draw.prototype.drawFrame = function(){
  this.clearContext();
  this.updateCharacters();
  this.drawCharacters();
  this.detectCollisions();
  this.addEnemies();
  this.tick++;
  this.checkLevel();
  this.checkEnd();
};

Draw.prototype.clearContext = function(){
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Draw.prototype.updateCharacters = function() {
  this.characters = this.characters.filter(function(character) {
    return character.alive === true;
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

Draw.prototype.checkLevel = function() {
  var cubesRemaining = this.board.cubes.filter(function(cube){
    return cube.active === false;
  });
  if(cubesRemaining.length === 0){
    this.level++;
    if (this.enemyFreq > 100) {
      this.enemyFreq -= 100;
    } else {
      this.enemyFreq = this.enemyFreq / 2;
    }
    this.game.resetLevel();
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
