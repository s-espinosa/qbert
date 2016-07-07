function Qbert(params) {
  this.lives = 3;
  this.position = 0
  this.board = params['board'];
  this.context = params['context'];
}

Qbert.prototype.onCube = function(){
    return this.board.findCube(this.position) || this.board.findCube(0);
}

Qbert.prototype.draw = function(pos) {
	var occupied = this.onCube(pos);
	this.context.fillStyle = '#ff66ff'; 
	this.context.fillRect(occupied.x-10, occupied.y-10, 20, 20);
};

Qbert.prototype.moveDownLeft = function(pos) {
  	this.position = this.onCube(pos).downLeftId;
};

Qbert.prototype.moveDownRight = function(pos) {
  this.position = this.onCube(pos).downRightId;
};

Qbert.prototype.moveUpLeft = function(pos) {
  this.position = this.onCube(pos).upLeftId;
};

Qbert.prototype.moveUpRight = function(pos) {
  this.position = this.onCube(pos).upRightId;
};


module.exports = Qbert;