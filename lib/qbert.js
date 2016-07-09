function Qbert(params) {
  this.lives = 3;
  this.position = 0;
  this.board = params['board'];
  this.context = params['context'];
}

Qbert.prototype.onCube = function(){
    return this.board.cubes[this.position] || this.board.cubes[0];
};

Qbert.prototype.draw = function(pos) {
  if (this.position == null) {
    this.position = 0;
  }
	var occupied = this.onCube(pos);
	this.context.fillStyle = '#ff66ff';
	this.context.fillRect(occupied.x-10, occupied.y-10, 20, 20);
};

Qbert.prototype.move = function(position) {
  if (position === null) {
    this.position = null;
  } else {
    this.position = position;
  }
};

module.exports = Qbert;
