'use strict';

var _ducks = require('./ducks');

var _ducks2 = _interopRequireDefault(_ducks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log('GOOOD MORNING!');

var toby = new _ducks2.default('Toby'); // const Duck = require('./ducks');

console.log(toby.quack());