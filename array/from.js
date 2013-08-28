'use strict';

var isArguments   = require('../function/is-arguments')

  , isArray = Array.isArray, slice = Array.prototype.slice;

module.exports = function (obj) {
	if (isArray(obj)) return obj;
	if (isArguments(obj)) {
		return (obj.length === 1) ? [obj[0]] : Array.apply(null, obj);
	}
	return slice.call(obj);
};