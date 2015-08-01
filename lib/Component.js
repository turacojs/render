"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @class Component */
var Component = (function () {
  function Component() {
    _classCallCheck(this, Component);
  }

  _createClass(Component, [{
    key: "init",

    /**
     * Invoked on both server and browser (even the first time for the browser)
     
    * @memberof Component 
    * @instance 
    * @method init 
    * @param properties */
    value: function init(properties) {}

    /**
     * Invoked only on browser just the first time
     
    * @memberof Component 
    * @instance 
    * @method load */
  }, {
    key: "load",
    value: function load() {}

    /**
     * Invoked on both server and browser (except the first time for the browser)
     
    * @memberof Component 
    * @instance 
    * @method create 
    * @param data */
  }, {
    key: "create",
    value: function create(data) {}

    /**
     * Invoked on both server and browser (except the first time for the browser)
     
    * @memberof Component 
    * @instance 
    * @method render 
    * @param data */
  }, {
    key: "render",
    value: function render(data) {}

    /**
     * Invoked once on the browser
     *
     * Register events here
     
    * @memberof Component 
    * @instance 
    * @method toHtmlString */
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