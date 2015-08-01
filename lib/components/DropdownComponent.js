/* global S */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownComponent = (function (_S$Component) {
    _inherits(DropdownComponent, _S$Component);

    function DropdownComponent() {
        _classCallCheck(this, DropdownComponent);

        _get(Object.getPrototypeOf(DropdownComponent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DropdownComponent, [{
        key: 'init',
        value: function init() {
            this.elements.push('link', 'menu');
        }

        /**
         * Invoked on both server and browser (except the first time for the browser)
         */
    }, {
        key: 'create',
        value: function create() {
            this.$container.addClass('dropdown');
            this.$link = $.create('a').appendTo(this.$container).addClass('dropdown-toggle').setAttribute('href', '#').setAttribute('onclick', 'return false');
            this.$menu = $.create('ul').addClass('dropdown-menu selectable linksList spaced').appendTo(this.$container);
        }
    }, {
        key: 'render',
        value: function render(data) {
            this.$link.text(data.title);
        }
    }, {
        key: 'append',
        value: function append(item) {
            $.create('li').append(item).appendTo(this.$menu);
        }
    }, {
        key: 'appendText',
        value: function appendText(item) {
            $.create('li').appendText(item).appendTo(this.$menu);
        }
    }, {
        key: 'ready',
        value: function ready() {
            var _this = this;

            console.log('prepare DropdownComponent');
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
})(S.Component);

exports['default'] = DropdownComponent;
module.exports = exports['default'];
//# sourceMappingURL=DropdownComponent.js.map