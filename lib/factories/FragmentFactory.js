'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

/** @class FragmentFactory 
* @param instanceFactory */
var FragmentFactory = (function () {
    function FragmentFactory(instanceFactory) {
        _classCallCheck(this, FragmentFactory);

        this.instanceFactory = instanceFactory;
    }

    /**
     * @param {Function|*} fragmentClass
     * @returns {*}
     
    * @memberof FragmentFactory 
    * @instance 
    * @method create 
    * @param fragmentClass */

    _createClass(FragmentFactory, [{
        key: 'create',
        value: function create(fragmentClass) {
            var fragment = this.instanceFactory(fragmentClass);
            fragment.$fragment = _springbokjsDomLib$2['default'].createFragment();
            return fragment;
        }
    }]);

    return FragmentFactory;
})();

exports['default'] = FragmentFactory;
module.exports = exports['default'];
//# sourceMappingURL=FragmentFactory.js.map