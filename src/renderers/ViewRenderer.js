import ComponentRender from './ComponentRenderer';

export default class ViewRenderer extends ComponentRender {
    /**
     * @param ViewFactory factory
     * @param ComponentRender componentRenderer
     */
    constructor(factory, componentRenderer) {
        super(factory);
        this.componentRenderer = componentRenderer;
    }

    render(view, properties, data) {
        view.component = componentClass => {
            return properties => {
                const data = properties && properties.data;
                if (properties) {
                    delete properties.data;
                }
                return this.componentRenderer.createThenRender(componentClass, properties, data)
            };
        };
        view.init(properties);
        view.create();

        if (properties) {
            view.$container.setAttribute('data-view-properties', JSON.stringify(properties));
        }

        if (view.parent) {
            view.$container.setAttribute('data-view-parent', view.parent);
        }

        return Promise.resolve(view.render(data)).then((content) => {
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
