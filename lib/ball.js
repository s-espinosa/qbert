var enemyPosition = require('./enemy_position');

function Ball(params) {
  this.newPosition      = enemyPosition();
  this.currentPosition  = this.newPosition.position;
  this.nextPosition     = this.newPosition.position;
  this.board            = params['board'];
  this.x                = this.newPosition.x;
  this.y                = 120;
  this.targetX          = 0;
  this.xVelocity        = 0;
  this.yVelocity        = 0;
  this.context          = params['context'];
  this.jumping          = false;
  this.moveInterval     = 50;
  this.alive            = true;
}

Ball.prototype.update = function(tick) {
  if(tick % this.moveInterval === 0){
    this.move();
  }
    //set quantities with variable names so that this becomes readable


  if (this.nextPosition === null && this.y < 620) {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.yVelocity += 0.5;
  } else if (this.nextPosition === null && this.y > 620) {
    this.die();
  } else if (this.x !== this.targetX) {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    if(this.jumping === true) {
      this.yVelocity += 0.5;
    }
  } else {
    this.jumping         = false;
    this.xVelocity       = 0;
    this.yVelocity       = 0;
    this.currentPosition = this.nextPosition;
  }
};

Ball.prototype.getYPosition = function() {
  return this.onCube.y;
};

Ball.prototype.onCube = function(){
  return this.board.cubes[this.currentPosition] || this.board.cubes[0];
};

Ball.prototype.draw = function() {
  this.context.fillStyle = 'crimson';
	this.context.beginPath();
  this.context.arc(this.x, this.y-10, 15, 0, 2 * Math.PI, false);
  this.context.fill();
};


Ball.prototype.move = function(){
  var chance = Math.random();
  if (chance > 0.5) {
    this.downLeft();
  } else {
    this.downRight();
  }
};

Ball.prototype.die = function(){
  this.jumping = false;
  this.alive   = false;
};

Ball.prototype.downLeft = function() {
  this.targetX   = this.x - 40;
  console.log(this.targetX)
  this.xVelocity = -2;
  console.log(this.xVelocity)
  this.yVelocity = -1.75;
  console.log(this.yVelocity)
  this.jumping = true;
  console.log(this.jumping)
  this.nextPosition = this.onCube().downLeftId;
  console.log(this.nextPosition)
};

Ball.prototype.downRight = function() {
  this.targetX   = this.x + 40;
  this.xVelocity = +2;
  this.yVelocity = -1.75;
  this.jumping = true;
  this.nextPosition = this.onCube().downRightId;
};

module.exports = Ball;
