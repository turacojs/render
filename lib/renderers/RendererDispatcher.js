'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
/** @class RendererDispatcher 
* @param renderers */
var RendererDispatcher = function RendererDispatcher(renderers) {
    var _this = this;

    _classCallCheck(this, RendererDispatcher);

    _Object$keys(renderers).forEach(function (key) {
        _this['render' + key[0].toUpperCase() + key.substr(1)] = renderers[key];
    });
};

exports['default'] = RendererDispatcher;
module.exports = exports['default'];
//# sourceMappingURL=RendererDispatcher.js.map