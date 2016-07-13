function Cube(params) {
  this.active       = false;
  this.id           = params["id"];
  this.x            = params["x"];
  this.y            = params["y"];
  this.upLeftId     = params["upLeftId"];
  this.upRightId    = params["upRightId"];
  this.downLeftId   = params["downLeftId"];
  this.downRightId  = params["downRightId"];
  this.context      = params['context'];
}

Cube.prototype.drawCube = function(){
  //set quantities with variable names so that this becomes readable
  var topColor = "";
  if (this.active){
    topColor = '#FFCC46';
  } else {
    topColor = '#3B6D80';
  }

  this.context.beginPath();
  this.context.moveTo(this.x, this.y);
  this.context.lineTo(this.x+40, this.y+10);
  this.context.lineTo(this.x, this.y+20);
  this.context.lineTo(this.x-40, this.y+10);
  this.context.fillStyle= topColor;
  this.context.fill();
  this.context.beginPath();
  this.context.moveTo(this.x, this.y+20);
  this.context.lineTo(this.x, this.y+70);
  this.context.lineTo(this.x+40, this.y+60);
  this.context.lineTo(this.x+40, this.y+10);
  this.context.fillStyle="#47528B";
  this.context.fill();
  this.context.beginPath();
  this.context.moveTo(this.x, this.y+20);
  this.context.lineTo(this.x, this.y+70);
  this.context.lineTo(this.x-40, this.y+60);
  this.context.lineTo(this.x-40, this.y+10);
  this.context.fillStyle="#529A68";
  this.context.fill();
};

module.exports = Cube;
