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

var _BrowserComponentRenderer2 = require('./BrowserComponentRenderer');

var _BrowserComponentRenderer3 = _interopRequireDefault(_BrowserComponentRenderer2);

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

/** @class BrowserViewRenderer */
var BrowserViewRenderer = (function (_BrowserComponentRenderer) {
    _inherits(BrowserViewRenderer, _BrowserComponentRenderer);

    function BrowserViewRenderer() {
        _classCallCheck(this, BrowserViewRenderer);

        _get(Object.getPrototypeOf(BrowserViewRenderer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BrowserViewRenderer, [{
        key: 'load',

        /**
         * Invoked only on browser just the first time
         
        * @memberof BrowserViewRenderer 
        * @instance 
        * @method load 
        * @param viewName 
        * @param $view */
        value: function load(viewName, $view) {
            return _Promise.resolve(this.factory.create(viewName, $view)).then(function (view) {
                var properties = $view.getAttribute('data-view-properties');
                properties = properties && JSON.parse(properties);
                view.init(properties);
                view.ready(properties);
                $view._view = view;
            });
        }
    }, {
        key: 'render',
        /** @memberof BrowserViewRenderer 
        * @instance 
        * @method render 
        * @param view 
        * @param properties 
        * @param data */value: function render(view, properties, data) {
            var _this = this;

            view.init(properties);
            view._initElements();

            return _Promise.resolve(view.render(data)).then(function () {
                if (!view.parent) {
                    throw new Error('Cannot render a view without a parent: ' + view.constructor.name);
                }

                var $parentView = _springbokjsDomLib$2['default'].first('[data-view="' + view.parent + '"]');

                if ($parentView) {
                    $parentView._view.update(view);
                    view._parent = $parentView._view;
                    return view;
                }

                return _this.createThenRender(view.parent, {
                    title: view.title,
                    content: view.$fragment
                }).then(function (parent) {
                    view._parent = parent;
                    return view;
                });
            });
        }
    }]);

    return BrowserViewRenderer;
})(_BrowserComponentRenderer3['default']);

exports['default'] = BrowserViewRenderer;
module.exports = exports['default'];
//# sourceMappingURL=BrowserViewRenderer.js.map