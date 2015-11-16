'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _ComponentRenderer = require('./ComponentRenderer');

var _ComponentRenderer2 = _interopRequireDefault(_ComponentRenderer);

var _factoriesViewFactory = require('../factories/ViewFactory');

var _factoriesViewFactory2 = _interopRequireDefault(_factoriesViewFactory);

/** @class ViewRenderer 
* @param factory 
* @param componentRenderer */
var ViewRenderer = (function (_ComponentRender) {
    _inherits(ViewRenderer, _ComponentRender);

    /**
     * @param {ViewFactory|Function} factory
     * @param {ComponentRender} componentRenderer
     */

    function ViewRenderer(factory, componentRenderer) {
        _classCallCheck(this, ViewRenderer);

        if (typeof factory === 'function') {
            factory = new _factoriesViewFactory2['default'](factory);
        }

        _get(Object.getPrototypeOf(ViewRenderer.prototype), 'constructor', this).call(this, factory);
        this.componentRenderer = componentRenderer;
    }

    _createClass(ViewRenderer, [{
        key: 'render',
        /** @memberof ViewRenderer 
        * @instance 
        * @method render 
        * @param view 
        * @param properties 
        * @param [data=undefined] */value: function render(view, properties) {
            var _this = this;

            var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

            view.component = function (componentClass) {
                return function (properties, data) {
                    if (!data) {
                        data = properties && properties.data;

                        if (properties) {
                            delete properties.data;
                        }
                    }

                    return _this.componentRenderer.createThenRender(componentClass, properties, data);
                };
            };

            view.init(properties);

            if (properties) {
                view.$container.setAttribute('data-view-properties', JSON.stringify(properties));
            }

            if (view.parent) {
                view.$container.setAttribute('data-view-parent', view.parent.name);
            }

            return _Promise.resolve(view.render(data)).then(function (content) {
                _this._setComponentsRole(view);

                if (content) {
                    view.$container.empty().append(content);
                }

                if (!view.parent) {
                    return view;
                }

                var dataLayout = data.dataLayout || {};
                dataLayout.dataLayout = dataLayout;
                dataLayout.title = view.title;
                dataLayout.content = view.$container;

                return _this.createThenRender(view.parent, undefined, dataLayout);
            });
        }
    }]);

    return ViewRenderer;
})(_ComponentRenderer2['default']);

exports['default'] = ViewRenderer;
module.exports = exports['default'];
//# sourceMappingURL=ViewRenderer.js.map