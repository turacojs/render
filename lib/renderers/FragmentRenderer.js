"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @class FragmentRenderer 
* @param factory */
var FragmentRenderer = (function () {
    /**
     * @param {FragmentFactory} factory
     */

    function FragmentRenderer(factory) {
        _classCallCheck(this, FragmentRenderer);

        this.factory = factory;
    }

    _createClass(FragmentRenderer, [{
        key: "createThenRender",
        /** @memberof FragmentRenderer 
        * @instance 
        * @method createThenRender 
        * @param fragmentName 
        * @param data */value: function createThenRender(fragmentName, data) {
            var fragment = this.factory.create(fragmentName);
            return this.render(fragment, data);
        }
    }, {
        key: "render",
        /** @memberof FragmentRenderer 
        * @instance 
        * @method render 
        * @param fragment 
        * @param data */value: function render(fragment, data) {
            fragment.render(data);

            if (fragment.parent) {
                return this.createThenRender(fragment.parent, {
                    title: fragment.title,
                    content: fragment.$container
                });
            }

            return fragment;
        }
    }]);

    return FragmentRenderer;
})();

exports["default"] = FragmentRenderer;
module.exports = exports["default"];
//# sourceMappingURL=FragmentRenderer.js.map