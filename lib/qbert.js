function Qbert(params) {
  this.lives            = 3;
  this.currentPosition  = 0;
  this.nextPosition     = 0;
  this.board            = params['board'];
  this.x                = 325;
  this.y                = 60;
  this.targetX          = 0;
  this.xVelocity        = 0;
  this.yVelocity        = 0;
  this.context          = params['context'];
  this.jumping          = false;
  this.alive            = true;
}

Qbert.prototype.update = function() {
  if (this.nextPosition === null && this.y < 620) {
    // add method to pull out this logic
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

    if ( this.board.cubes[this.currentPosition].active === false ) {
      this.board.activateCube(this.currentPosition);
    }
  }
};

Qbert.prototype.draw = function() {
  var x = this.x;
  var y = this.y-7;
    
  // Body (Now Pink)
  var centerX = x;
  var centerY = y;
  var height = 25;
  var width = 30;
  this.context.beginPath();
  this.context.moveTo(centerX, centerY - height/2);
  this.context.bezierCurveTo(
    centerX + width/2, centerY - height/2,
    centerX + width/2, centerY + height/2,
    centerX, centerY + height/2);
  this.context.bezierCurveTo(
    centerX - width/2, centerY + height/2,
    centerX - width/2, centerY - height/2,
    centerX, centerY - height/2);
  this.context.fillStyle = "#ff66ff";
  this.context.fill();
  this.context.closePath();   

  // Right Eye
  var centerX = x+5;
  var centerY = y;
  var height = 6;
  var width = 5;
  this.context.beginPath();
  this.context.moveTo(centerX, centerY - height/2);
  this.context.bezierCurveTo(
    centerX + width/2, centerY - height/2,
    centerX + width/2, centerY + height/2,
    centerX, centerY + height/2);
  this.context.bezierCurveTo(
    centerX - width/2, centerY + height/2,
    centerX - width/2, centerY - height/2,
    centerX, centerY - height/2);
  this.context.strokeStyle="black";
  this.context.lineWidth=1;
  this.context.stroke();
  this.context.fillStyle = "white";
  this.context.fill();
  this.context.closePath();  

  // Left Eye
  var centerX = x-1;
  var centerY = y;
  var height = 6;
  var width = 5;
  this.context.beginPath();
  this.context.moveTo(centerX, centerY - height/2);
  this.context.bezierCurveTo(
    centerX + width/2, centerY - height/2,
    centerX + width/2, centerY + height/2,
    centerX, centerY + height/2);
  this.context.bezierCurveTo(
    centerX - width/2, centerY + height/2,
    centerX - width/2, centerY - height/2,
    centerX, centerY - height/2);
  this.context.strokeStyle="black";
  this.context.lineWidth=1;
  this.context.stroke();
  this.context.fillStyle = "white";
  this.context.fill();
  this.context.closePath();   
  this.context.strokeStyle="black";

  // Left Pupil
  this.context.beginPath();
  this.context.arc(x-1,y+1,1,0,2*Math.PI);
  this.context.stroke();
  this.context.fillStyle = "black";
  this.context.fill();
  this.context.closePath();   

  // Right Pupil
  this.context.beginPath();
  this.context.arc(x+5,y+1,1,0,2*Math.PI);
  this.context.stroke();
  this.context.fillStyle = "black";
  this.context.fill();
  this.context.closePath();  

  // Awkward Nose-Thing
  this.context.lineWidth=1;
  this.context.stroke();
  this.context.closePath();   
  this.context.beginPath();
  this.context.arc(x+10,y+18,15,1.38*Math.PI,1.85*Math.PI, false);
  this.context.stroke();
  this.context.strokeStyle="#ff66ff";
  this.context.lineTo(x+21,y+15);
  this.context.stroke();
  this.context.closePath();   
  this.context.fillStyle = "#ff66ff";
  this.context.fill();
  this.context.lineWidth=5;
  this.context.beginPath();
  this.context.arc(x+20,y+11,2,0,2*Math.PI);
  this.context.stroke();
  this.context.fillStyle = "black";
  this.context.fill();
  this.context.closePath();  

  // Legs
  this.context.fillStyle = "crimson";
  this.context.fillRect(x-5,y+10,2,10);
  this.context.fillRect(x+5,y+10,2,8);
  this.context.fillRect(x-8,y+20,8,2);
  this.context.fillRect(x+3,y+18,8,2);
};

Qbert.prototype.die = function(){
  this.lives--;
  this.jumping         = false;
  this.x               = 325;
  this.y               = 60;
  this.xVelocity       = 0;
  this.yVelocity       = 0;
  this.currentPosition = 0;
  this.nextPosition    = 0;
};

Qbert.prototype.setBoard = function(board) {
  this.board = board;
};

Qbert.prototype.onCube = function(){
    return this.board.cubes[this.currentPosition] || this.board.cubes[0];
};

Qbert.prototype.upRight = function() {
    if (this.jumping === false){
      this.targetX   = this.x + 40;
      this.xVelocity = +2;
      this.yVelocity = -7.75;
      this.jumping   = true;
      this.nextPosition = this.onCube().upRightId;
    }
};

Qbert.prototype.upLeft = function() {
  if (this.jumping === false){
    this.targetX   = this.x - 40;
    this.xVelocity = -2;
    this.yVelocity = -7.75;
    this.jumping   = true;
    this.nextPosition = this.onCube().upLeftId;
  }
};

Qbert.prototype.downLeft = function() {
  if (this.jumping === false){
    this.targetX   = this.x - 40;
    this.xVelocity = -2;
    this.yVelocity = -1.75;
    this.jumping = true;
    this.nextPosition = this.onCube().downLeftId;
  }
};

Qbert.prototype.downRight = function() {
  if (this.jumping === false){
    this.targetX   = this.x + 40;
    this.xVelocity = +2;
    this.yVelocity = -1.75;
    this.jumping = true;
    this.nextPosition = this.onCube().downRightId;
  }
};

module.exports = Qbert;
