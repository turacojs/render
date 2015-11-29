'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

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
        key: '_setElementsRole',
        /** @memberof ComponentRenderer 
        * @instance 
        * @method _setElementsRole 
        * @param component */value: function _setElementsRole(component) {
            if (component.elements && component.elements.length) {
                component.elements.forEach(function (elementName) {
                    if (component['$' + elementName]) {
                        component['$' + elementName].setAttribute('data-role', elementName);
                    }
                });
            }
        }
    }, {
        key: '_setComponentsRole',
        /** @memberof ComponentRenderer 
        * @instance 
        * @method _setComponentsRole 
        * @param component */value: function _setComponentsRole(component) {
            if (component.components && component.components.length) {
                component.components.forEach(function (componentName) {
                    if (component.elements && component.elements.indexOf(componentName) !== -1) {
                        throw new Error('Key "' + componentName + '" already used for an element.');
                    }

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
            component.renderer = this;
            component.init(properties);

            if (properties) {
                component.$container.attr('data-component-properties', JSON.stringify(properties));
            }

            var renderResult = component.render(data);
            this._setElementsRole(component);
            this._setComponentsRole(component);

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