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

/** @class ComponentFactory 
* @param instanceFactory */
var ComponentFactory = (function () {
    function ComponentFactory(instanceFactory) {
        _classCallCheck(this, ComponentFactory);

        this.instanceFactory = instanceFactory;
    }

    _createClass(ComponentFactory, [{
        key: 'create',
        /** @memberof ComponentFactory 
        * @instance 
        * @method create 
        * @param componentClass 
        * @param $container 
        * @param options */value: function create(componentClass, $container, options) {
            var component = this.instanceFactory(componentClass, options);
            if ($container) {
                component.$container = $container;
            } else {
                component.$container = _springbokjsDomLib$2['default'].create('div');
            }

            component.$container.attr('data-component', componentClass.name);
            component.$container.attr('data-component-preload', component.ready !== undefined || component.destroy !== undefined);

            if (component.destroy) {
                component.$container.on('dispose', function () {
                    return component.destroy();
                });
            }

            return component;
        }
    }, {
        key: 'load',
        /** @memberof ComponentFactory 
        * @instance 
        * @method load 
        * @param componentName 
        * @param $container 
        * @param options */value: function load(componentName, $container, options) {
            var component = this.instanceFactory(componentName, options);

            return _Promise.resolve(component).then(function (component) {
                component.$container = $container;

                if (component.destroy) {
                    component.$container.on('dispose', function () {
                        return component.destroy();
                    });
                }

                return component;
            });
        }
    }]);

    return ComponentFactory;
})();

exports['default'] = ComponentFactory;
module.exports = exports['default'];
//# sourceMappingURL=ComponentFactory.js.map