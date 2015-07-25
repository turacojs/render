'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var RendererDispatcher = function RendererDispatcher(renderers) {
    var _this = this;

    _classCallCheck(this, RendererDispatcher);

    Object.keys(renderers).forEach(function (key) {
        _this['render' + key[0].toUpperCase() + key.substr(1)] = renderers[key];
    });
};

exports['default'] = RendererDispatcher;
module.exports = exports['default'];
//# sourceMappingURL=RendererDispatcher.js.map