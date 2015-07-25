'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _View2 = require('./View');

var _View3 = _interopRequireDefault(_View2);

var _htmlDocumentLibDoctype = require('html-document/lib/Doctype');

var _htmlDocumentLibDoctype2 = _interopRequireDefault(_htmlDocumentLibDoctype);

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

var TopLayout = (function (_View) {
    function TopLayout() {
        _classCallCheck(this, TopLayout);

        _get(Object.getPrototypeOf(TopLayout.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(TopLayout, _View);

    _createClass(TopLayout, [{
        key: 'init',
        value: function init() {
            this.$container[0].appendChild(new _htmlDocumentLibDoctype2['default']());
            this.$html = _springbokjsDomLib$2['default'].create('html').appendTo(this.$container);
            this.$head = _springbokjsDomLib$2['default'].create('head').appendTo(this.$html);
            this.$body = _springbokjsDomLib$2['default'].create('body').appendTo(this.$html);
        }
    }, {
        key: '_initElements',
        value: function _initElements() {}
    }, {
        key: 'render',
        value: function render(data) {
            if (this.head) {
                this.$head.append(this.head());
            }
            if (data.title) {
                this.$head.append(_springbokjsDomLib$2['default'].create('title').text(data.title));
            }
            if (this.body) {
                var res = this.body(this.$body, data);
                if (res) {
                    this.$body.append(res);
                }
            }

            this.$content.append(data.content);
        }
    }, {
        key: 'toHtmlString',
        value: function toHtmlString() {
            return this.$container[0].innerHTML;
        }
    }]);

    return TopLayout;
})(_View3['default']);

exports['default'] = TopLayout;
module.exports = exports['default'];
//# sourceMappingURL=TopLayout.js.map