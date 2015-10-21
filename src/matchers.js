'use strict';

var Immutable = require('immutable');

var slice = Array.prototype.slice;

var partial = function (func) {
  var boundArgs = slice.call(arguments, 1);

  return function () {
    var args = boundArgs.concat(slice.call(arguments));
    return func.apply(this, args);
  };
};

var passes = function (a, b) {
  return (!a ^ !b);
};

var compares = function (func) {
  return {
    compare: partial(func, false),
    negativeCompare: partial(func, true)
  };
};

var toString = function (obj) {
  return obj && typeof obj.toString === 'function' ? obj.toString() : obj;
};

module.exports = {
  toBeImmutable: function () {
    return compares(function (not, actual) {
      return {
        pass: passes(Immutable.Iterable.isIterable(actual), not),
        message: `Expected ${toString(actual)}${not ? ' not' : ''} to be immutable`
      };
    });
  },

  toEqualImmutable: function () {
    return compares(function (not, actual, expected) {
      return {
        pass: passes(Immutable.is(actual, expected), not),
        message: `Expected ${toString(actual)}${not ? ' not' : ''} to equal ${toString(expected)}`
      };
    });
  }
};
