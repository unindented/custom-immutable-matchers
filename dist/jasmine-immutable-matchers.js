(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["immutable"], factory);
	else if(typeof exports === 'object')
		exports["jasmine-immutable-matchers"] = factory(require("immutable"));
	else
		root["jasmine-immutable-matchers"] = factory(root["Immutable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Immutable = __webpack_require__(2);

	var slice = Array.prototype.slice;

	var partial = function partial(func) {
	  var boundArgs = slice.call(arguments, 1);

	  return function () {
	    var args = boundArgs.concat(slice.call(arguments));
	    return func.apply(this, args);
	  };
	};

	var passes = function passes(a, b) {
	  return !a ^ !b;
	};

	var compares = function compares(func) {
	  return {
	    compare: partial(func, false),
	    negativeCompare: partial(func, true)
	  };
	};

	var toString = function toString(obj) {
	  return obj && typeof obj.toString === 'function' ? obj.toString() : obj;
	};

	module.exports = {
	  toBeImmutable: function toBeImmutable() {
	    return compares(function (not, actual) {
	      return {
	        pass: passes(Immutable.Iterable.isIterable(actual), not),
	        message: 'Expected ' + toString(actual) + (not ? ' not' : '') + ' to be immutable'
	      };
	    });
	  },

	  toEqualImmutable: function toEqualImmutable() {
	    return compares(function (not, actual, expected) {
	      return {
	        pass: passes(Immutable.is(actual, expected), not),
	        message: 'Expected ' + toString(actual) + (not ? ' not' : '') + ' to equal ' + toString(expected)
	      };
	    });
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;