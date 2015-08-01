export default class ComponentRenderer {
    /**
     * @param {ComponentFactory} factory
     */
    constructor(factory) {
        this.factory = factory;
    }

    createThenRender(componentClass, properties, data) {
        const component = this.factory.create(componentClass);
        return this.render(component, properties, data);
    }

    render(component, properties, data) {
        component.component = componentClass => {
            return properties => {
                const data = properties.data;
                delete properties.data;
                return this.createThenRender(componentClass, properties, data);
            };
        };

        component.init(properties);

        if (properties) {
            component.$container.attr('data-component-properties', JSON.stringify(properties));
        }

        component.create();

        const renderResult = component.render(data);

        if (renderResult instanceof Promise) {
            return renderResult.then((renderResult) => {
                if (renderResult) {
                    component.$container.empty().append(renderResult);
                }

                return component;
            });
        }

        if (renderResult) {
            component.$container.empty().append(renderResult);
        }

        return component;
    }
}
