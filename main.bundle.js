/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"server\""); }());
	(function webpackMissingModule() { throw new Error("Cannot find module \"node\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var Board = __webpack_require__(2);

	var level1 = new Board({ context: context });

	level1.initializeCubes();
	level1.drawCubes();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cube = __webpack_require__(3);

	function Board(params) {
	  this.cubes = [];
	  this.context = params['context'];
	}

	Board.prototype.initializeCubes = function () {
	  for (var i = 0; i < 7; i++) {
	    for (var j = 0; j <= i; j++) {
	      var newParams = {
	        id: this.cubes.length,
	        x: 450 - i * 40 + j * 80,
	        y: 180 + i * 60,
	        upLeftId: j > 0 ? this.cubes.length - i - 1 : null,
	        upRightId: j < i ? this.cubes.length - i : null,
	        downLeftId: this.cubes.length + (i + 1) <= 27 ? this.cubes.length + (i + 1) : null,
	        downRightId: this.cubes.length + (i + 2) <= 27 ? this.cubes.length + (i + 2) : null,
	        context: this.context
	      };
	      var cube = new Cube(newParams);
	      this.cubes.push(cube);
	    }
	  }
	};

	Board.prototype.drawCubes = function () {
	  this.cubes.forEach(function (cube) {
	    cube.drawCube();
	    console.log("ID: " + cube.id + " UL: " + cube.upLeftId + " UR: " + cube.upRightId + " DL: " + cube.downLeftId + " DR: " + cube.downRightId);
	  });
	};

	Board.prototype.activateCube = function (id) {
	  for (var i = 0; i < this.cubes.length; i++) {
	    if (this.cubes[i].id === id) {
	      this.cubes[i].active = true;
	      this.cubes[i].drawCube;
	    }
	  }
	};

	module.exports = Board;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function Cube(params) {
	  this.active = false;
	  this.id = params["id"];
	  this.x = params["x"];
	  this.y = params["y"];
	  this.upLeftId = params["upLeftId"];
	  this.upRightId = params["upRightId"];
	  this.downLeftId = params["downLeftId"];
	  this.downRightId = params["downRightId"];
	  this.context = params['context'];
	}

	Cube.prototype.drawCube = function () {
	  var topColor = "";
	  if (this.active) {
	    topColor = '#FFCC46';
	  } else {
	    topColor = '#3B6D80';
	  }

	  this.context.beginPath();
	  this.context.moveTo(this.x, this.y);
	  this.context.lineTo(this.x + 40, this.y + 10);
	  this.context.lineTo(this.x, this.y + 20);
	  this.context.lineTo(this.x - 40, this.y + 10);
	  this.context.fillStyle = topColor;
	  this.context.fill();
	  this.context.beginPath();
	  this.context.moveTo(this.x, this.y + 20);
	  this.context.lineTo(this.x, this.y + 70);
	  this.context.lineTo(this.x + 40, this.y + 60);
	  this.context.lineTo(this.x + 40, this.y + 10);
	  this.context.fillStyle = "#47528B";
	  this.context.fill();
	  this.context.beginPath();
	  this.context.moveTo(this.x, this.y + 20);
	  this.context.lineTo(this.x, this.y + 70);
	  this.context.lineTo(this.x - 40, this.y + 60);
	  this.context.lineTo(this.x - 40, this.y + 10);
	  this.context.fillStyle = "#529A68";
	  this.context.fill();
	};

	module.exports = Cube;

/***/ }
/******/ ]);