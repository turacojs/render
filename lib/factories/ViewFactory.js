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

/** @class ViewFactory 
* @param instanceFactory */
var ViewFactory = (function () {
    /**
     * @param {Function} instanceFactory
     */

    function ViewFactory(instanceFactory) {
        _classCallCheck(this, ViewFactory);

        this.instanceFactory = instanceFactory;
    }

    /**
     * @param {Function|*} viewClass
     * @returns {View}
     
    * @memberof ViewFactory 
    * @instance 
    * @method create 
    * @param viewClass 
    * @param options */

    _createClass(ViewFactory, [{
        key: 'create',
        value: function create(viewClass, options) {
            var view = this.instanceFactory(viewClass, options);
            view.$container = _springbokjsDomLib$2['default'].create('div');
            view.$container.attr('data-view', view.constructor.name);
            return view;
        }

        /**
         * @param {string} viewName
         * @returns {View}
         
        * @memberof ViewFactory 
        * @instance 
        * @method load 
        * @param viewName 
        * @param $container 
        * @param options */
    }, {
        key: 'load',
        value: function load(viewName, $container, options) {
            var view = this.instanceFactory(viewName, options);
            return _Promise.resolve(view).then(function (view) {
                view.$container = $container;
                return view;
            });
        }
    }]);

    return ViewFactory;
})();

exports['default'] = ViewFactory;
module.exports = exports['default'];
//# sourceMappingURL=ViewFactory.js.map