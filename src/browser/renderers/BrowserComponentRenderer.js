import ComponentRenderer from '../../renderers/ComponentRenderer';

export default class BrowserComponentRenderer extends ComponentRenderer {
    /**
     * Invoked only on browser just the first time
     *
     * @param {string} componentName
     * @param {Element} $container
     */
    load(componentName, $container) {
        const promise = Promise.resolve(this.factory.load(componentName, $container)).then((component) => {
            let properties = $container.getAttribute('data-component-properties');
            properties = properties && JSON.parse(properties);
            component.properties = properties || {};
            component.init(component.properties);

            if (component.elements && component.elements.length) {
                component.elements.forEach((elementName) => {
                    component['$' + elementName] = component.$container.findFirst('[data-role="' + elementName + '"]');
                });
            }

            let promises;

            if (component.components && component.components.length) {
                promises = component.components.map((componentName) => {
                    let $componentElement = component.$container.findFirst('[data-role="' + componentName + '"]');

                    if (!$componentElement) {
                        return null;
                    }

                    if (!$componentElement._component) {
                        throw new Error('This is not a component');
                    }

                    return Promise.resolve($componentElement._component).then((internalComponent) => {
                        component[componentName] = internalComponent;
                    });
                });
            }

            return Promise.all(promises || []).then(() => {
                if (component.load) {
                    component.load(component.properties);
                }

                if (component.ready) {
                    component.ready();
                }

                $container._component = component;
            }).then(() => component);
        });
        $container._component = promise;
        return promise;
    }

    /**
     * @param {Component} component
     * @param {Object} [properties]
     * @param {Object} [data]
     * @returns {Component}
     */
    render(component, properties, data) {
        component.properties = properties || {};
        component.init(component.properties);
        component.create();
        this._initElements(component);
        this._initComponents(component);

        const renderResult = component.render(data);

        if (renderResult instanceof Promise) {
            return renderResult.then((content) => {
                if (content) {
                    component.$container.empty().append(content);
                }

                component.ready();
                return component;
            });
        }

        if (renderResult) {
            component.$container.empty().append(renderResult);
        }

        component.ready();
        return component;
    }
}
