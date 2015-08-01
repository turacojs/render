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
        key: '_initElements',
        /** @memberof ComponentFactory 
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
        key: 'create',
        /** @memberof ComponentFactory 
        * @instance 
        * @method create 
        * @param componentClass 
        * @param $container */value: function create(componentClass, $container) {
            var component = this.instanceFactory(componentClass);
            if ($container) {
                component.$container = $container;
            } else {
                component.$container = _springbokjsDomLib$2['default'].create('div');
            }

            this._initElements(component);
            component.$container.attr('data-component', componentClass.name);
            component.$container.attr('data-component-preload', component.ready !== undefined || component.destroy !== undefined);

            if (component.destroy) {
                component.$container.on('dispose', function () {
                    return component.destroy();
                });
            }

            component.elements = component.elements || [];
            return component;
        }
    }, {
        key: 'load',
        /** @memberof ComponentFactory 
        * @instance 
        * @method load 
        * @param componentName 
        * @param $container */value: function load(componentName, $container) {
            var component = this.instanceFactory(componentName);

            return _Promise.resolve(component).then(function () {
                component.$container = $container;

                if (component.destroy) {
                    component.$container.on('dispose', function () {
                        return component.destroy();
                    });
                }

                if (component.elements && component.elements.length) {
                    component.elements.forEach(function (elementName) {
                        if (!component['$' + elementName]) {
                            component['$' + elementName] = $container.find('[data-role="' + elementName + '"]');
                        }
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