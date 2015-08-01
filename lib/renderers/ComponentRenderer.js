'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
/** @class ComponentRenderer 
* @param factory */
var ComponentRenderer = (function () {
    /**
     * @param {ComponentFactory} factory
     */

    function ComponentRenderer(factory) {
        _classCallCheck(this, ComponentRenderer);

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

            var renderResult = component.render(data);

            if (renderResult instanceof _Promise) {
                return renderResult.then(function () {
                    return component;
                });
            }

            return component;
        }
    }]);

    return ComponentRenderer;
})();

exports['default'] = ComponentRenderer;
module.exports = exports['default'];
//# sourceMappingURL=ComponentRenderer.js.map