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
        value: function createThenRender(componentClass, properties, data) {
            var component = this.factory.create(componentClass);
            return this.render(component, properties, data);
        }
    }, {
        key: 'render',
        value: function render(component, properties, data) {
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