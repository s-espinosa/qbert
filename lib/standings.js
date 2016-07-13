function get(){
  var lsGames = localStorage.getItem('games') || '[]';
  var games = JSON.parse(lsGames);
  return games;
}

function set(){
  var games = get();
  return localStorage.setItem('games', JSON.stringify(games));
}

function update(input){
  var games = get();
  games.push(input);
  localStorage.setItem('games', JSON.stringify(games));
  return games;
}

module.exports.get = get();
module.exports.set = set;
module.exports.update = update;
