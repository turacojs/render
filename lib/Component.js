"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = (function () {
  function Component() {
    _classCallCheck(this, Component);
  }

  _createClass(Component, [{
    key: "init",

    /**
     * Invoked on both server and browser (even the first time for the browser)
     */
    value: function init(properties) {}

    /**
     * Invoked only on browser just the first time
     */
  }, {
    key: "load",
    value: function load() {}

    /**
     * Invoked on both server and browser (except the first time for the browser)
     */
  }, {
    key: "create",
    value: function create(data) {}

    /**
     * Invoked on both server and browser (except the first time for the browser)
     */
  }, {
    key: "render",
    value: function render(data) {}

    /**
     * Invoked once on the browser
     *
     * Register events here
     */
    /*component.ready can be undefined
    ready() {
     }*/

    /**
     * Invoked once on the browser
     */
    /*component.destroy can be undefined
    destroy() {
     }*/

  }, {
    key: "toHtmlString",
    value: function toHtmlString() {
      return this.$container.outerHTML;
    }
  }]);

  return Component;
})();

exports["default"] = Component;
module.exports = exports["default"];
//# sourceMappingURL=Component.js.map