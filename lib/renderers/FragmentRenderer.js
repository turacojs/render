"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FragmentRenderer = (function () {
    /**
     * @param FragmentFactory factory
     */

    function FragmentRenderer(factory) {
        _classCallCheck(this, FragmentRenderer);

        this.factory = factory;
    }

    _createClass(FragmentRenderer, [{
        key: "createThenRender",
        value: function createThenRender(fragmentName, data) {
            var fragment = this.factory.create(fragmentName);
            return this.render(fragment, data);
        }
    }, {
        key: "render",
        value: function render(fragment, data) {
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