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

var _htmlDocumentLibDoctype = require('html-document/lib/Doctype');

var _htmlDocumentLibDoctype2 = _interopRequireDefault(_htmlDocumentLibDoctype);

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

/** @class TopLayout */
var TopLayout = (function (_View) {
    _inherits(TopLayout, _View);

    function TopLayout() {
        _classCallCheck(this, TopLayout);

        _get(Object.getPrototypeOf(TopLayout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TopLayout, [{
        key: 'init',
        /** @memberof TopLayout 
        * @instance 
        * @method init */value: function init() {
            this.$container[0].appendChild(new _htmlDocumentLibDoctype2['default']());
            this.$html = _springbokjsDomLib$2['default'].create('html').appendTo(this.$container);
            this.$head = _springbokjsDomLib$2['default'].create('head').appendTo(this.$html);
            this.$body = _springbokjsDomLib$2['default'].create('body').appendTo(this.$html);
        }
    }, {
        key: '_initElements',
        /** @memberof TopLayout 
        * @instance 
        * @method _initElements */value: function _initElements() {}
    }, {
        key: 'render',
        /** @memberof TopLayout 
        * @instance 
        * @method render 
        * @param data */value: function render(data) {
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
        /** @memberof TopLayout 
        * @instance 
        * @method toHtmlString */value: function toHtmlString() {
            return this.$container[0].innerHTML;
        }
    }]);

    return TopLayout;
})(_View3['default']);

exports['default'] = TopLayout;
module.exports = exports['default'];
//# sourceMappingURL=TopLayout.js.map