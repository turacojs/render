'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentRenderer = require('./ComponentRenderer');

var _ComponentRenderer2 = _interopRequireDefault(_ComponentRenderer);

var ViewRenderer = (function (_ComponentRender) {
    _inherits(ViewRenderer, _ComponentRender);

    /**
     * @param ViewFactory factory
     * @param ComponentRender componentRenderer
     */

    function ViewRenderer(factory, componentRenderer) {
        _classCallCheck(this, ViewRenderer);

        _get(Object.getPrototypeOf(ViewRenderer.prototype), 'constructor', this).call(this, factory);
        this.componentRenderer = componentRenderer;
    }

    _createClass(ViewRenderer, [{
        key: 'render',
        value: function render(view, properties, data) {
            var _this = this;

            view.component = function (componentClass) {
                return function (properties) {
                    var data = properties && properties.data;
                    if (properties) {
                        delete properties.data;
                    }
                    return _this.componentRenderer.createThenRender(componentClass, properties, data);
                };
            };
            view.init(properties);
            view.create();

            if (properties) {
                view.$container.setAttribute('data-view-properties', JSON.stringify(properties));
            }

            if (view.parent) {
                view.$container.setAttribute('data-view-parent', view.parent);
            }

            return Promise.resolve(view.render(data)).then(function (content) {
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