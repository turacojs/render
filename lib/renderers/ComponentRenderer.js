'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

var _factoriesComponentFactory = require('../factories/ComponentFactory');

var _factoriesComponentFactory2 = _interopRequireDefault(_factoriesComponentFactory);

/** @class ComponentRenderer 
* @param factory */
var ComponentRenderer = (function () {
    /**
     * @param {ComponentFactory|Function} factory
     */

    function ComponentRenderer(factory) {
        _classCallCheck(this, ComponentRenderer);

        if (typeof factory === 'function') {
            factory = new _factoriesComponentFactory2['default'](factory);
        }

        this.factory = factory;
    }

    _createClass(ComponentRenderer, [{
        key: 'createThenRender',
        /** @memberof ComponentRenderer 
        * @instance 
        * @method createThenRender 
        * @param componentClass 
        * @param properties 
        * @param data */value: function createThenRender(componentClass, properties, data) {
            var component = this.factory.create(componentClass);
            return this.render(component, properties, data);
        }
    }, {
        key: '_initElements',
        /** @memberof ComponentRenderer 
        * @instance 
        * @method _initElements 
        * @param component */value: function _initElements(component) {
            if (component.elements && component.elements.length) {
                component.elements.forEach(function (elementName) {
                    if (!component['$' + elementName]) {
                        component['$' + elementName] = _springbokjsDomLib$2['default'].create('div');
                    }

                    component['$' + elementName].setAttribute('data-role', elementName);
                });
            }
        }
    }, {
        key: '_initComponents',
        /** @memberof ComponentRenderer 
        * @instance 
        * @method _initComponents 
        * @param component */value: function _initComponents(component) {
            if (component.components && component.components.length) {
                component.components.forEach(function (componentName) {
                    if (!component[componentName]) {
                        throw new Error('Missing component ' + componentName);
                    }

                    component[componentName].$container.setAttribute('data-role', componentName);
                });
            }
        }
    }, {
        key: 'render',
        /** @memberof ComponentRenderer 
        * @instance 
        * @method render 
        * @param component 
        * @param properties 
        * @param data */value: function render(component, properties, data) {
            var _this = this;

            component.component = function (componentClass) {
                return function (properties) {
                    var data = properties.data;
                    delete properties.data;
                    return _this.createThenRender(componentClass, properties, data);
                };
            };

            component.init(properties);

            if (properties) {
                component.$container.attr('data-component-properties', JSON.stringify(properties));
            }

            component.create();

            this._initElements(component);
            this._initComponents(component);

            var renderResult = component.render(data);

            if (renderResult instanceof _Promise) {
                return renderResult.then(function (renderResult) {
                    if (renderResult) {
                        component.$container.empty().append(renderResult);
                    }

                    return component;
                });
            }

            if (renderResult) {
                component.$container.empty().append(renderResult);
            }

            return component;
        }
    }]);

    return ComponentRenderer;
})();

exports['default'] = ComponentRenderer;
module.exports = exports['default'];
//# sourceMappingURL=ComponentRenderer.js.map