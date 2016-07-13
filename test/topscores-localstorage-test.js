// var assert = require('chai').assert;
//
// var sinon = require('sinon');
//
// var standings = require('../lib/standings.js');
//
// describe('localStorage', function(){
//   var storage = {};
//
//   storage = standings(mockStorage);
//
//   function storageMock() {
//
//     return {
//       setItem: function(key, value) {
//         storage[key] = value || '';
//       },
//       getItem: function(key) {
//         return storage[key] || null;
//       },
//       removeItem: function(key) {
//         delete storage[key];
//       },
//       get length() {
//         return Object.keys(storage).length;
//       },
//       key: function(i) {
//         var keys = Object.keys(storage);
//         return keys[i] || null;
//       }
//     };
//   }
//
//   it('defaults to an empty array', function(){
//     asert.equal(storage.games, '[]');
//   });
//
//
// });
