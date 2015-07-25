"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fragment = (function () {
    function Fragment() {
        _classCallCheck(this, Fragment);
    }

    _createClass(Fragment, [{
        key: "render",
        value: function render() {}
    }, {
        key: "toHtmlString",
        value: function toHtmlString() {
            return this.$fragment[0].innerHTML;
        }
    }, {
        key: "$container",
        get: function get() {
            return this.$fragment;
        }
    }]);

    return Fragment;
})();

exports["default"] = Fragment;
module.exports = exports["default"];
//# sourceMappingURL=Fragment.js.map