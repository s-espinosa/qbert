var assert = require('chai').assert;
var sinon = require('sinon');
var Cube = require('../lib/cube')
var Ball = require('../lib/ball');

describe('Ball', function(){
  context('when initialized', function(){
    var cube1 = new Cube({id: 0})
    var cube2 = new Cube({id: 1})
    var cube3 = new Cube({id: 2})
    var board = {cubes: [cube1, cube2, cube3]}
    var ball = new Ball({board: board});

    it('defaults to the top cube', function(){
      assert.equal(ball.currentPosition, 0);
    });

    // it('reports its position by cube', function(){
    //   assert.equal(ball.onCube().id, 0);
    //   assert.ball.onCube instanceof Cube;
    // });

    it('defaults to alive', function(){
      assert.equal(ball.alive, true);
    });
  
  }); 

//     beforeEach(function () {
//       ball.onCube.returns(cube1);
//     });
// context('movement', function(){
//   var cube1 = new Cube({id: 0, downLeftId: 1, downRightId: 2})
//     var cube2 = new Cube({id: 1})
//     var cube3 = new Cube({id: 2})
//     var board = {cubes: [cube1, cube2, cube3]}
//     var ball = new Ball({board: board, x: 0});

    
//     it('moves to the assigned cube', function(){
//       console.log(ball.onCube())
//       assert.equal(ball.currentPosition, 0);
      
//       ball.move();
//       console.log(ball.currentPosition);
//       assert([1,2].includes(ball.currentPosition), 'ball position is in second row');
//     });
//   });

  context('death', function(){
    var ball = new Ball({})
    it('sets alive to false when it dies', function(){
      ball.die();
      assert.equal(ball.alive, false);
    });

  });

});
