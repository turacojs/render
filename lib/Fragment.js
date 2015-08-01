"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @class Fragment */
var Fragment = (function () {
    function Fragment() {
        _classCallCheck(this, Fragment);
    }

    _createClass(Fragment, [{
        key: "render",
        /** @memberof Fragment 
        * @instance 
        * @method render */value: function render() {}
    }, {
        key: "toHtmlString",
        /** @memberof Fragment 
        * @instance 
        * @method toHtmlString */value: function toHtmlString() {
            return this.$fragment[0].innerHTML;
        }
    }, {
        key: "$container",
        /** @memberof Fragment 
        * @instance 
        * @member $container */get: function get() {
            return this.$fragment;
        }
    }]);

    return Fragment;
})();

exports["default"] = Fragment;
module.exports = exports["default"];
//# sourceMappingURL=Fragment.js.map