'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _View2 = require('./View');

var _View3 = _interopRequireDefault(_View2);

/** @class Layout */
var Layout = (function (_View) {
    _inherits(Layout, _View);

    function Layout() {
        _classCallCheck(this, Layout);

        _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).call(this);
        this.elements = ['content'];
    }

    _createClass(Layout, [{
        key: 'update',
        /** @memberof Layout 
        * @instance 
        * @method update 
        * @param view */value: function update(view) {
            this.$content.empty().append(view.$container);
            if (this.updateTitle) {
                this.updateTitle(view.title);
            }
        }
    }]);

    return Layout;
})(_View3['default']);

exports['default'] = Layout;
module.exports = exports['default'];
//# sourceMappingURL=Layout.js.map