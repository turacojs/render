'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _BrowserComponentRenderer2 = require('./BrowserComponentRenderer');

var _BrowserComponentRenderer3 = _interopRequireDefault(_BrowserComponentRenderer2);

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
         */
        value: function load(viewName, $view) {
            var view = this.factory.create(viewName, $view);
            var properties = $view.getAttribute('data-view-properties');
            properties = properties && JSON.parse(properties);
            view.init(properties);
            view.load(properties);
            $view._view = view;
        }
    }, {
        key: 'render',
        value: function render(view, properties, data) {
            var _this = this;

            view.init(properties);
            view._initElements();

            return Promise.resolve(view.render(data)).then(function () {
                if (!view.parent) {
                    throw new Error('Cannot render a view without a parent: ' + viewName);
                }
                var $parentView = $.first('[data-view="' + view.parent + '"]');

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