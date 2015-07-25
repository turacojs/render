'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

var ComponentRenderer = (function () {
    /**
     * @param ComponentFactory factory
     */

    function ComponentRenderer(factory) {
        _classCallCheck(this, ComponentRenderer);

        this.factory = factory;
    }

    _createClass(ComponentRenderer, [{
        key: 'createThenRender',
        value: function createThenRender(componentName, properties, data) {
            var component = this.factory.create(componentName);
            return this.render(component, properties, data);
        }
    }, {
        key: '_initElements',

        /**
         * Invoked on both server and browser (except the first time for the browser)
         */
        value: function _initElements(component) {
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
        key: 'render',
        value: function render(component, properties, data) {
            var _this = this;

            component.component = function (componentName) {
                return function (properties) {
                    var data = properties.data;
                    delete properties.data;
                    return _this.createThenRender(componentName, properties, data);
                };
            };
            component.init(properties);
            if (properties) {
                component.$container.attr('data-component-properties', JSON.stringify(properties));
            }
            component.create();
            this._initElements(component);
            var renderResult = component.render(data);
            if (renderResult instanceof Promise) {
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