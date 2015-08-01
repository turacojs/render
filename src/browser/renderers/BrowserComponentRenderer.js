import ComponentRenderer from '../../renderers/ComponentRenderer';

export default class BrowserComponentRenderer extends ComponentRenderer {
    /**
     * Invoked only on browser just the first time
     */
    load(componentName, $container) {
        const component = this.factory.create(componentName, $container);
        let properties = $container.getAttribute('data-component-properties');
        properties = properties && JSON.parse(properties);
        component.properties = properties || {};
        component.init(component.properties);

        if (component.elements && component.elements.length) {
            component.elements.forEach((elementName) => {
                component['$' + elementName] = component.$container.findFirst('[data-role="' + elementName + '"]');
            });
        }

        component.load(component.properties);
        component.ready();
        $container._component = component;
    }

    render(component, properties, data) {
        component.properties = properties || {};
        component.init(component.properties);
        this._initElements(component);
        component.create();

        const renderResult = component.render(data);

        if (renderResult instanceof Promise) {
            return renderResult.then(() => {
                component.ready();
                return component;
            });
        }

        component.ready();
        return component;
    }
}
