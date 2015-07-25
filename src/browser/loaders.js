import $ from 'springbokjs-dom/lib/$';

export function loadComponents(componentLoader) {
    $('[data-component]').forEach(($container) => {
        var componentName = $container.getAttribute('data-component');
        componentLoader.load(componentName, $container);
    });
}

export function loadViews(viewLoader) {
    var views = {};
    $('[data-view]').forEach(($view) => {
        var viewName = $view.getAttribute('data-view');
        views[viewName] = viewLoader.load(viewName, $view);
    }).forEach(($view) => {
        var parent = $view.getAttribute('data-view-parent');
        if (parent) {
            $view._view._parent = views[parent];
            views[parent]._child = $view._view;
        }
    });
    return views;
};
