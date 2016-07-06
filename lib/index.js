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

Cube.prototype.drawInactive = function(){
  context.beginPath();
  context.moveTo(this.x, this.y);
  context.lineTo(this.x+18, this.y+6);
  context.lineTo(this.x, this.y+12);
  context.lineTo(this.x-18, this.y+6);
  context.fillStyle="#3B6D80";
  context.fill();
  context.beginPath();
  context.moveTo(this.x, this.y+12);
  context.lineTo(this.x, this.y+30);
  context.lineTo(this.x+18, this.y+24);
  context.lineTo(this.x+18, this.y+6);
  context.fillStyle="#47528B";
  context.fill();
  context.beginPath();
  context.moveTo(this.x, this.y+12);
  context.lineTo(this.x, this.y+30);
  context.lineTo(this.x-18, this.y+24);
  context.lineTo(this.x-18, this.y+6);
  context.fillStyle="#529A68";
  context.fill();
};

Cube.prototype.drawActive = function(){
  context.beginPath();
  context.moveTo(this.x, this.y);
  context.lineTo(this.x+18, this.y+6);
  context.lineTo(this.x, this.y+12);
  context.lineTo(this.x-18, this.y+6);
  context.fillStyle="#FFCC46";
  context.fill();
  context.beginPath();
  context.moveTo(this.x, this.y+12);
  context.lineTo(this.x, this.y+30);
  context.lineTo(this.x+18, this.y+24);
  context.lineTo(this.x+18, this.y+6);
  context.fillStyle="#47528B";
  context.fill();
  context.beginPath();
  context.moveTo(this.x, this.y+12);
  context.lineTo(this.x, this.y+30);
  context.lineTo(this.x-18, this.y+24);
  context.lineTo(this.x-18, this.y+6);
  context.fillStyle="#529A68";
  context.fill();
};


// CREATE CUBES //
var cubes = [];

for(var i = 0; i < 7; i++){
  for(var j = 0; j <= i; j++) {
    var newParams = {
      id: cubes.length,
      x: 200 - i*18 + j*36,
      y: 180 + i*24,
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
  cube.drawInactive();
  console.log("ID: " + cube.id +
             " UL: " + cube.upLeftId +
             " UR: " + cube.upRightId +
             " DL: " + cube.downLeftId +
             " DR: " + cube.downRightId
  );
});


// DRAW SOME ACTIVE CUBES //
cubes[0].drawActive();
cubes[2].drawActive();
cubes[5].drawActive();
cubes[8].drawActive();
cubes[13].drawActive();
cubes[14].drawActive();
cubes[19].drawActive();
