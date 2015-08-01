/* eslint new-cap: 0 */
// jscs:disable requireCapitalizedConstructors

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = createBasicInstanceFactory;
/** @function 
* @param baseURL 
* @param [suffix=] */
function createBasicInstanceFactory(baseURL) {
    var suffix = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    return function (nameOrClass) {
        if (typeof nameOrClass === 'function') {
            var view = new nameOrClass();
            return view;
        }

        return System['import'](baseURL + nameOrClass + suffix).then(function (Class) {
            return new Class();
        });
    };
}

module.exports = exports['default'];
//# sourceMappingURL=basicInstanceFactory.js.map