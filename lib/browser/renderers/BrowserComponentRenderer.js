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
         *
         * @param {string} componentName
         * @param {Element} $container
         
        * @memberof BrowserComponentRenderer 
        * @instance 
        * @method load 
        * @param componentName 
        * @param $container */
        value: function load(componentName, $container) {
            var promise = _Promise.resolve(this.factory.load(componentName, $container)).then(function (component) {
                var properties = $container.getAttribute('data-component-properties');
                properties = properties && JSON.parse(properties);
                component.properties = properties || {};
                component.init(component.properties);

                if (component.elements && component.elements.length) {
                    component.elements.forEach(function (elementName) {
                        component['$' + elementName] = component.$container.findFirst('[data-role="' + elementName + '"]');
                    });
                }

                var promises = undefined;

                if (component.components && component.components.length) {
                    promises = component.components.map(function (componentName) {
                        var $componentElement = component.$container.findFirst('[data-role="' + componentName + '"]');

                        if (!$componentElement) {
                            return null;
                        }

                        if (!$componentElement._component) {
                            throw new Error('This is not a component');
                        }

                        return _Promise.resolve($componentElement._component).then(function (internalComponent) {
                            component[componentName] = internalComponent;
                        });
                    });
                }

                return _Promise.all(promises || []).then(function () {
                    if (component.load) {
                        component.load(component.properties);
                    }

                    if (component.ready) {
                        component.ready();
                    }

                    $container._component = component;
                }).then(function () {
                    return component;
                });
            });
            $container._component = promise;
            return promise;
        }

        /**
         * @param {Component} component
         * @param {Object} [properties]
         * @param {Object} [data]
         * @returns {Component}
         
        * @memberof BrowserComponentRenderer 
        * @instance 
        * @method render 
        * @param component 
        * @param properties 
        * @param data */
    }, {
        key: 'render',
        value: function render(component, properties, data) {
            component.properties = properties || {};
            component.init(component.properties);
            component.create();
            this._initElements(component);
            this._initComponents(component);

            var renderResult = component.render(data);

            if (renderResult instanceof _Promise) {
                return renderResult.then(function (content) {
                    if (content) {
                        component.$container.empty().append(content);
                    }

                    component.ready();
                    return component;
                });
            }

            if (renderResult) {
                component.$container.empty().append(renderResult);
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