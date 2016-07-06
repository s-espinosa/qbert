var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

// CUBE CONSTRUCTOR //
function Cube(params) {
  this.active       = false;
  this.id           = params["id"];
  this.x            = params["x"];
  this.y            = params["y"];
  this.upLeftId     = params["upLeftId"];
  this.upRightId    = params["upRightId"];
  this.downLeftId   = params["downLeftId"];
  this.downRightId  = params["downRightId"];
}

Cube.prototype.drawCube = function(status){
  if (status === 'active'){
    var topColor = '#FFCC46';
  } else {
    var topColor = '#3B6D80';
  };

  context.beginPath();
  context.moveTo(this.x, this.y);
  context.lineTo(this.x+40, this.y+10);
  context.lineTo(this.x, this.y+20);
  context.lineTo(this.x-40, this.y+10);
  context.fillStyle= topColor;
  context.fill();
  context.beginPath();
  context.moveTo(this.x, this.y+20);
  context.lineTo(this.x, this.y+70);
  context.lineTo(this.x+40, this.y+60);
  context.lineTo(this.x+40, this.y+10);
  context.fillStyle="#47528B";
  context.fill();
  context.beginPath();
  context.moveTo(this.x, this.y+20);
  context.lineTo(this.x, this.y+70);
  context.lineTo(this.x-40, this.y+60);
  context.lineTo(this.x-40, this.y+10);
  context.fillStyle="#529A68";
  context.fill();
};

// CREATE CUBES //
var cubes = [];

for(var i = 0; i < 7; i++){
  for(var j = 0; j <= i; j++) {
    var newParams = {
      id: cubes.length,
      x: 450 - i*40 + j*80,
      y: 180 + i*60,
      upLeftId: j > 0 ? cubes.length - i - 1 : null,
      upRightId: j < i ? cubes.length - i : null,
      downLeftId: cubes.length + (i + 1) <= 27 ? cubes.length + (i + 1) : null,
      downRightId: cubes.length + (i + 2) <= 27 ? cubes.length + (i + 2) : null,
    };
    var cube = new Cube(newParams);
    cubes.push(cube);
  }
}


// DRAW CUBES //
cubes.forEach(function(cube){
  cube.drawCube('inactive');
  console.log("ID: " + cube.id +
             " UL: " + cube.upLeftId +
             " UR: " + cube.upRightId +
             " DL: " + cube.downLeftId +
             " DR: " + cube.downRightId
  );
});


// DRAW SOME ACTIVE CUBES //
cubes[0].drawCube('active');
cubes[2].drawCube('active');
cubes[5].drawCube('active');
cubes[8].drawCube('active');
cubes[13].drawCube('active');
cubes[14].drawCube('active');
cubes[19].drawCube('active');
