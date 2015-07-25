'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = createBasicInstanceFactory;

function createBasicInstanceFactory(dirname, suffix) {
    return function (name) {
        var path = dirname + name + (suffix || '') + '.jsx';
        var module = require(path);
        if (typeof module !== 'function') {
            module = module['default'];
        }
        var view = new module();
        return view;
    };
}

module.exports = exports['default'];
//# sourceMappingURL=basicInstanceFactory.js.map