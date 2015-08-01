'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _Fragment2 = require('../Fragment');

var _Fragment3 = _interopRequireDefault(_Fragment2);

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

/** @class LoginFragment */
var LoginFragment = (function (_Fragment) {
    _inherits(LoginFragment, _Fragment);

    function LoginFragment() {
        _classCallCheck(this, LoginFragment);

        _get(Object.getPrototypeOf(LoginFragment.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(LoginFragment, [{
        key: 'init',
        /** @memberof LoginFragment 
        * @instance 
        * @method init */value: function init() {
            this.$form = this.helper.createFormForModel('User').action('/login').setClass('w400 centered big').append('<h2>' + this.helper.tC('Sign in') + '</h2>').fieldsetStart().input('_id').setAttribute('name', 'login').label('Username').placeholder('Enter your username').end().input('pwd').setAttribute('type', 'password').setAttribute('name', 'password').label('Password').end().submit('Login').container().addClass('center').end().end(false);

            _springbokjsDomLib$2['default'].create('div').addClass('clear', 'mt20').append(this.$form).appendTo(this.$fragment);
        }
    }]);

    return LoginFragment;
})(_Fragment3['default']);

exports['default'] = LoginFragment;
module.exports = exports['default'];
//# sourceMappingURL=LoginFragment.js.map