'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _Component2 = require('../Component');

var _Component3 = _interopRequireDefault(_Component2);

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

/** @class DropdownComponent */
var DropdownComponent = (function (_Component) {
    _inherits(DropdownComponent, _Component);

    function DropdownComponent() {
        _classCallCheck(this, DropdownComponent);

        _get(Object.getPrototypeOf(DropdownComponent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DropdownComponent, [{
        key: 'init',
        /** @memberof DropdownComponent 
        * @instance 
        * @method init */value: function init() {
            this.elements.push('link', 'menu');
        }

        /**
         * Invoked on both server and browser (except the first time for the browser)
         
        * @memberof DropdownComponent 
        * @instance 
        * @method create */
    }, {
        key: 'create',
        value: function create() {
            this.$container.addClass('dropdown');
            this.$link = _springbokjsDomLib$2['default'].create('a').appendTo(this.$container).addClass('dropdown-toggle').setAttribute('href', '#').setAttribute('onclick', 'return false');
            this.$menu = _springbokjsDomLib$2['default'].create('ul').addClass('dropdown-menu selectable linksList spaced').appendTo(this.$container);
        }
    }, {
        key: 'render',
        /** @memberof DropdownComponent 
        * @instance 
        * @method render 
        * @param data */value: function render(data) {
            this.$link.text(data.title);
        }
    }, {
        key: 'append',
        /** @memberof DropdownComponent 
        * @instance 
        * @method append 
        * @param item */value: function append(item) {
            _springbokjsDomLib$2['default'].create('li').append(item).appendTo(this.$menu);
        }
    }, {
        key: 'appendText',
        /** @memberof DropdownComponent 
        * @instance 
        * @method appendText 
        * @param item */value: function appendText(item) {
            _springbokjsDomLib$2['default'].create('li').appendText(item).appendTo(this.$menu);
        }
    }, {
        key: 'ready',
        /** @memberof DropdownComponent 
        * @instance 
        * @method ready */value: function ready() {
            var _this = this;

            this.$link.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this.$menu.stop();
                _this.$container.toggleClass('open');
                return false;
            });
        }
    }]);

    return DropdownComponent;
})(_Component3['default']);

exports['default'] = DropdownComponent;
module.exports = exports['default'];
//# sourceMappingURL=DropdownComponent.js.map