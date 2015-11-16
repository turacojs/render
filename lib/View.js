"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @class View */
var View = (function () {
    function View() {
        _classCallCheck(this, View);
    }

    _createClass(View, [{
        key: "init",
        /** @memberof View 
        * @instance 
        * @method init */value: function init() {}
    }, {
        key: "toHtmlString",
        /** @memberof View 
        * @instance 
        * @method toHtmlString */value: function toHtmlString() {
            return this.$container[0].outerHTML;
        }
    }]);

    return View;
})();

exports["default"] = View;
module.exports = exports["default"];
//# sourceMappingURL=View.js.map