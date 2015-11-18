import ComponentRender from './ComponentRenderer';
import ViewFactory from '../factories/ViewFactory';

export default class ViewRenderer extends ComponentRender {
    /**
     * @param {ViewFactory|Function} factory
     * @param {ComponentRender} componentRenderer
     */
    constructor(factory, componentRenderer) {
        if (typeof factory === 'function') {
            factory = new ViewFactory(factory);
        }

        super(factory);
        this.componentRenderer = componentRenderer;
    }

    render(view, properties, data = {}) {
        view.renderer = this;
        view.init(properties);

        if (properties) {
            view.$container.setAttribute('data-view-properties', JSON.stringify(properties));
        }

        if (view.parent) {
            view.$container.setAttribute('data-view-parent', view.parent.name);
        }

        return Promise.resolve(view.render(data)).then((content) => {
            this._setComponentsRole(view);

            if (content) {
                view.$container.empty().append(content);
            }

            if (!view.parent) {
                return view;
            }

            let dataLayout = data.dataLayout || {};
            dataLayout.dataLayout = dataLayout;
            dataLayout.title = view.title;
            dataLayout.content = view.$container;

            return this.createThenRender(view.parent, undefined, dataLayout);
        });
    }
}
