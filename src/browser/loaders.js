import $ from 'springbokjs-dom/lib/$';

export function loadComponents(componentLoader, options) {
    $('[data-component]').forEach(($container) => {
        const componentName = $container.getAttribute('data-component');
        componentLoader.load(componentName, $container, options);
    });
}

export function loadViews(viewLoader, options) {
    const views = new WeakMap();
    $('[data-view]').forEach(($view) => {
        const viewName = $view.getAttribute('data-view');
        views[viewName] = viewLoader.load(viewName, $view, options);
    }).forEach(($view) => {
        const parent = $view.getAttribute('data-view-parent');

        if (parent && views.has(parent)) {
            $view._view._parent = views[parent];
            views.get(parent)._child = $view._view;
        }
    });
    return views;
}
