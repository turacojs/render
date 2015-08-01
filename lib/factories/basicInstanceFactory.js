'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = createBasicInstanceFactory;

function createBasicInstanceFactory(dirname, suffix) {
    return function (nameOrClass) {
        if (typeof nameOrClass === 'function') {
            var _view = new nameOrClass();
            return _view;
        }
        var path = dirname + nameOrClass + (suffix || '');
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