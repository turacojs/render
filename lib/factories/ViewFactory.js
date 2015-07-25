'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

var ViewFactory = (function () {
    /**
     * @param function instanceFactory
     */

    function ViewFactory(instanceFactory) {
        _classCallCheck(this, ViewFactory);

        this.instanceFactory = instanceFactory;
    }

    _createClass(ViewFactory, [{
        key: 'create',

        /**
         * @param string viewName
         * @returns {View}
         */
        value: function create(viewName) {
            var view = this.instanceFactory(viewName);
            view.$container = _springbokjsDomLib$2['default'].create('div');
            view.$container.attr('data-view', viewName);
            return view;
        }
    }]);

    return ViewFactory;
})();

exports['default'] = ViewFactory;
module.exports = exports['default'];
//# sourceMappingURL=ViewFactory.js.map