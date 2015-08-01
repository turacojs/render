'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.loadComponents = loadComponents;
exports.loadViews = loadViews;

var _springbokjsDomLib$ = require('springbokjs-dom/lib/$');

var _springbokjsDomLib$2 = _interopRequireDefault(_springbokjsDomLib$);

/** @function 
* @param componentLoader */
function loadComponents(componentLoader) {
    (0, _springbokjsDomLib$2['default'])('[data-component]').forEach(function ($container) {
        var componentName = $container.getAttribute('data-component');
        componentLoader.load(componentName, $container);
    });
}

/** @function 
* @param viewLoader */
function loadViews(viewLoader) {
    var views = {};
    (0, _springbokjsDomLib$2['default'])('[data-view]').forEach(function ($view) {
        var viewName = $view.getAttribute('data-view');
        views[viewName] = viewLoader.load(viewName, $view);
    }).forEach(function ($view) {
        var parent = $view.getAttribute('data-view-parent');

        if (parent) {
            $view._view._parent = views[parent];
            views[parent]._child = $view._view;
        }
    });
    return views;
}
//# sourceMappingURL=loaders.js.map