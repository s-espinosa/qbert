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


// will have to instantiate Scoreboard at start of game, and it won't get reset
function Scoreboard() {
	this.games = [];
}

Scoreboard.prototype.addGame = function(player, totalScore){
	localStorage.setItem(player, totalScore);

	var input = {
		'player': player,
		'totalScore': totalScore
	};

	this.game.push(input);
}

Scoreboard.prototype.display = function(){
	// this might seem too complicated, but seems like a simpler alternative to utilizing JSON.stringify or JSON.parser; the idea of this approach is to account for scores only in localStorage and looking through all scores stored as data in Scoreboard object; have not accounted for edge case of same player -- it seems that in localStorage, if identical key, it will replace the existing key with new value
	this.games.forEach(function(game){
		var player = localStorage.getItem(Object.keys(game)[0]);
		var playerScore = localStorage.player;
	})
}

module.exports = Score;
