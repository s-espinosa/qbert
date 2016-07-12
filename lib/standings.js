function Standings() {
	var lsGames = localStorage.getItem('games') || '[]';
	this.games = JSON.parse(lsGames);
}

Standings.prototype.addGame = function(player, totalScore){
	var input = {
		'player': player,
		'totalScore': totalScore
	};

	this.games.push(input);
	localStorage.setItem('games', JSON.stringify(this.games));
}

Standings.prototype.display = function(){
	this.games.forEach(function(game){
		var player = localStorage.getItem(Object.keys(game)[0]);
		var playerScore = localStorage.player;
	})
}

module.exports = Standings;
