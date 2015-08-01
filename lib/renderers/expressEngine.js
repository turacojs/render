'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = createExpressEngine;

var _ViewRenderer = require('./ViewRenderer');

var _ViewRenderer2 = _interopRequireDefault(_ViewRenderer);

var _factoriesViewFactory = require('../factories/ViewFactory');

var _factoriesViewFactory2 = _interopRequireDefault(_factoriesViewFactory);

var _ComponentRenderer = require('./ComponentRenderer');

var _ComponentRenderer2 = _interopRequireDefault(_ComponentRenderer);

var _factoriesComponentFactory = require('../factories/ComponentFactory');

var _factoriesComponentFactory2 = _interopRequireDefault(_factoriesComponentFactory);

var _factoriesBasicInstanceFactory = require('../factories/basicInstanceFactory');

var _factoriesBasicInstanceFactory2 = _interopRequireDefault(_factoriesBasicInstanceFactory);

/** @function 
* @param dirname */
function createExpressEngine(dirname) {
    if (dirname[dirname.length - 1] !== '/') {
        dirname += '/';
    }

    var componentRenderer = new _ComponentRenderer2['default'](( /** @function */function () {
        return new _factoriesComponentFactory2['default']((0, _factoriesBasicInstanceFactory2['default'])(dirname + 'components/', 'Component'));
    })());

    var viewRenderer = new _ViewRenderer2['default'](( /** @function */function () {
        return new _factoriesViewFactory2['default']((0, _factoriesBasicInstanceFactory2['default'])(dirname));
    })(), componentRenderer);

    return function (path, data, callback) {
        var name = path.slice(dirname.length, -3);
        var result = viewRenderer.createThenRender(name, data.properties, data);
        if (typeof result.then === 'function') {
            return result.then(function (result) {
                return callback(null, result.toHtmlString());
            })['catch'](function (err) {
                return callback(err);
            });
        }

        callback(null, result.toHtmlString());
    };
}

module.exports = exports['default'];
//# sourceMappingURL=expressEngine.js.map