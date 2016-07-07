var Cube = require('./cube');
// var Qbert = require('./qbert');

function Board(params) {
  this.cubes = [];
  this.context = params['context'];
}

Board.prototype.initializeCubes = function() {
  for(var i = 0; i < 7; i++){
    for(var j = 0; j <= i; j++) {
      var newParams = {
        id: this.cubes.length,
        x: 450 - i*40 + j*80,
        y: 180 + i*60,
        upLeftId: j > 0 ? this.cubes.length - i - 1 : null,
        upRightId: j < i ? this.cubes.length - i : null,
        downLeftId: this.cubes.length + (i + 1) <= 27 ? this.cubes.length + (i + 1) : null,
        downRightId: this.cubes.length + (i + 2) <= 27 ? this.cubes.length + (i + 2) : null,
        context: this.context
      };
      var cube = new Cube(newParams);
      this.cubes.push(cube);
    }
  }
};

Board.prototype.drawCubes = function(){
  this.cubes.forEach(function(cube){
    cube.drawCube();
    console.log("ID: " + cube.id +
               " UL: " + cube.upLeftId +
               " UR: " + cube.upRightId +
               " DL: " + cube.downLeftId +
               " DR: " + cube.downRightId
    );
  });
};

Board.prototype.findCube = function(id){
  for (var i = 0; i < this.cubes.length; i++) {
    if (this.cubes[i].id === id) {
      return this.cubes[i]
    }
  }
};

Board.prototype.activateCube = function(id){
    var selected = this.findCube(id);
    selected.active = true;
    selected.drawCube();
};

module.exports = Board;
