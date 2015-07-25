'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

var ComponentFactory = (function () {
    function ComponentFactory(instanceFactory) {
        _classCallCheck(this, ComponentFactory);

        this.instanceFactory = instanceFactory;
    }

    _createClass(ComponentFactory, [{
        key: 'create',
        value: function create(fragmentName) {
            var fragment = this.instanceFactory(fragmentName);
            fragment.$fragment = _springbokjsDomLib$2['default'].createFragment();
            return fragment;
        }
    }]);

    return ComponentFactory;
})();

exports['default'] = ComponentFactory;
module.exports = exports['default'];
//# sourceMappingURL=FragmentFactory.js.map