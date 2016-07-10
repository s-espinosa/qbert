function Ball(params) {
  this.position = 0
  this.interval = 10000;
  this.speed = 500;
  this.board = params['board'];
  this.context = params['context'];
}

Ball.prototype.onCube = function(){
  return this.board.cubes[this.position] || this.board.cubes[0];
}


Ball.prototype.draw = function(pos) {
  var occupied = this.onCube(pos);
	this.context.beginPath();
  this.context.arc(occupied.x, occupied.y-10, 15, 0, 2 * Math.PI, false);
  this.context.fillStyle = 'crimson';
  this.context.fill();
};

Ball.prototype.descend = function(pos){
  if (pos===null) {
    var pos = 0
  }

  var chance = Math.random();
  if (chance > .5) {
    this.move(this.board.cubes[pos].downLeftId);
  } else {
    this.move(this.board.cubes[pos].downRightId);    
  }

  console.log(this.position);
  // setTimeout(this.descend(this.position),1000); 
  // window.setTimeout(this.descend(this.position), 5000);
}

Ball.prototype.move = function(position) {
  if (position === null) {
    this.position = null;
  } else {
    this.position = position;
  }
}

module.exports = Ball;