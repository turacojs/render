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

var _renderersComponentRenderer = require('../../renderers/ComponentRenderer');

var _renderersComponentRenderer2 = _interopRequireDefault(_renderersComponentRenderer);

/** @class BrowserComponentRenderer */
var BrowserComponentRenderer = (function (_ComponentRenderer) {
    _inherits(BrowserComponentRenderer, _ComponentRenderer);

    function BrowserComponentRenderer() {
        _classCallCheck(this, BrowserComponentRenderer);

        _get(Object.getPrototypeOf(BrowserComponentRenderer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BrowserComponentRenderer, [{
        key: 'load',

        /**
         * Invoked only on browser just the first time
         
        * @memberof BrowserComponentRenderer 
        * @instance 
        * @method load 
        * @param componentName 
        * @param $container */
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
        /** @memberof BrowserComponentRenderer 
        * @instance 
        * @method render 
        * @param component 
        * @param properties 
        * @param data */value: function render(component, properties, data) {
            component.properties = properties || {};
            component.init(component.properties);
            this._initElements(component);
            component.create();

            var renderResult = component.render(data);

            if (renderResult instanceof _Promise) {
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