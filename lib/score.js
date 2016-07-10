function Score(params) {
	this.total = 0;
}

Score.prototype.increase = function(n) {
	this.total += n;
}

Score.prototype.reset = function(){
	this.total = 0;
	var scoreDiv = document.getElementById("scoreboard");
	scoreDiv.innerHTML = "";
}

module.exports = Score;