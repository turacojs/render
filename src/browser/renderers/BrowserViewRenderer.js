import BrowserComponentRenderer from './BrowserComponentRenderer';
import $ from 'springbokjs-dom/lib/$';

export default class BrowserViewRenderer extends BrowserComponentRenderer {
    /**
     * Invoked only on browser just the first time
     */
    load(viewName, $view) {
        return Promise.resolve(this.factory.create(viewName, $view)).then((view) => {
            let properties = $view.getAttribute('data-view-properties');
            properties = properties && JSON.parse(properties);
            view.init(properties);
            view.load(properties);
            $view._view = view;
        });
    }

    render(view, properties, data) {
        view.init(properties);
        view._initElements();

        return Promise.resolve(view.render(data)).then(() => {
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
