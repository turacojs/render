'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _renderersComponentRenderer = require('../../renderers/ComponentRenderer');

var _renderersComponentRenderer2 = _interopRequireDefault(_renderersComponentRenderer);

var BrowserComponentRenderer = (function (_ComponentRenderer) {
    function BrowserComponentRenderer() {
        _classCallCheck(this, BrowserComponentRenderer);

        _get(Object.getPrototypeOf(BrowserComponentRenderer.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(BrowserComponentRenderer, _ComponentRenderer);

    _createClass(BrowserComponentRenderer, [{
        key: 'load',

        /**
         * Invoked only on browser just the first time
         */
        value: function load(componentName, $container) {
            var component = this.factory.create(componentName, $container);
            var properties = $container.getAttribute('data-component-properties');
            properties = properties && JSON.parse(properties);
            component.properties = properties || {};
            component.init(component.properties);

            if (component.elements && component.elements.length) {
                component.elements.forEach(function (elementName) {
                    component['$' + elementName] = component.$container.findFirst('[data-role="' + elementName + '"]');
                });
            }

            component.load(component.properties);
            component.ready();
            $container._component = component;
        }
    }, {
        key: 'render',
        value: function render(component, properties, data) {
            component.properties = properties || {};
            component.init(component.properties);
            this._initElements(component);
            component.create();
            var renderResult = component.render(data);
            if (renderResult instanceof Promise) {
                return renderResult.then(function () {
                    component.ready();
                    return component;
                });
            }
            component.ready();
            return component;
        }
    }]);

    return BrowserComponentRenderer;
})(_renderersComponentRenderer2['default']);

exports['default'] = BrowserComponentRenderer;
module.exports = exports['default'];
//# sourceMappingURL=BrowserComponentRenderer.js.map