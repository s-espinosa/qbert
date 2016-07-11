var assert = require('chai').assert;
var sinon = require('sinon');
var Board = require('../lib/board');

describe('Board', function(){
  context('when initialized', function(){
    var board = new Board({});

    it('defaults to empty cube array', function(){
      assert.equal(board.cubes.length, 0);
    });
  }); 

  context('initializing cubes', function(){
    var board = new Board({});
    board.initializeCubes();

    it('populates with cube objects', function(){
      assert.equal(board.cubes.length, 28);
      assert.equal(board.cubes[0].id, 0);
      assert.equal(board.cubes[27].id, 27);
  	});

  	it('assigns neighbors relative to cube position', function(){
      assert.equal(board.cubes[0].upLeftId, null);
      assert.equal(board.cubes[0].upRightId, null);
      assert.equal(board.cubes[0].downLeftId, 1);
      assert.equal(board.cubes[0].downRightId, 2);
    });
  });

  context('activating cubes', function(){
    var board = new Board({score: {total: 0}});
   

    // it('activates cubes by id', function(){
    //   assert.equal(board.cubes[5].active, false);
    //   board.activateCube(5);
    //   assert.equal(board.cubes[5].active, true);
    // });

  });

});
