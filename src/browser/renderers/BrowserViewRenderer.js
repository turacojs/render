import BrowserComponentRenderer from './BrowserComponentRenderer';
import $ from 'springbokjs-dom/lib/$';

export default class BrowserViewRenderer extends BrowserComponentRenderer {
    /**
     * Invoked only on browser just the first time
     */
    load(viewName, $view) {
        return Promise.resolve(this.factory.load(viewName, $view)).then((view) => {
            let properties = $view.getAttribute('data-view-properties');
            properties = properties && JSON.parse(properties);
            view.init(properties);

            let promises;
            if (view.components && view.components.length) {
                promises = view.components.map((componentName) => {
                    const $component = view.$container.findFirst('[data-role="' + componentName + '"]');
                    if (!$component._component) {
                        throw new Error('Component is not loaded');
                    }

                    return Promise.resolve($component._component).then((component) => {
                        view[componentName] = component;
                    });
                });
            } else {
                promises = [];
            }

            return Promise.all(promises).then(() => {
                if (view.ready) {
                    view.ready(properties);
                }

                $view._view = view;
                return view;
            });
        });
    }

    render(view, properties, data) {
        view.init(properties);
        view.create();
        this._initComponents(view);

        return Promise.resolve(view.render(data)).then((renderResult) => {
            if (renderResult) {
                view.$container.empty().append(renderResult);
            }

            if (!view.parent) {
                throw new Error('Cannot render a view without a parent: ' + view.constructor.name);
            }

            const $parentView = $.first('[data-view="' + view.parent + '"]');

            if ($parentView) {
                $parentView._view.update(view);
                view._parent = $parentView._view;
                return view;
            }

            return this.createThenRender(view.parent, {
                title: view.title,
                content: view.$fragment,
            }).then((parent) => {
                view._parent = parent;
                return view;
            });
        });
    }
}
