function Score(params) {
	this.total = 0;
}

Score.prototype.increase = function(n) {
	this.total += n;
}

module.exports = Score;