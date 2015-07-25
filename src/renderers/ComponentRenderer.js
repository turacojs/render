import $ from 'springbokjs-dom/lib/$';

export default class ComponentRenderer {
    /**
     * @param ComponentFactory factory
     */
    constructor(factory) {
        this.factory = factory;
    }


    createThenRender(componentName, properties, data) {
        var component = this.factory.create(componentName);
        return this.render(component, properties, data);
    }

    /**
     * Invoked on both server and browser (except the first time for the browser)
     */
    _initElements(component) {
        if (component.elements && component.elements.length) {
            component.elements.forEach((elementName) => {
                if (!component['$' + elementName]) {
                    component['$' + elementName] = $.create('div');
                }
                component['$' + elementName].setAttribute('data-role', elementName);
            });
        }
    }

    render(component, properties, data) {
        component.component = componentName => {
            return properties => {
                const data = properties.data;
                delete properties.data;
                return this.createThenRender(componentName, properties, data)
            };
        };
        component.init(properties);
        if (properties) {
            component.$container.attr('data-component-properties', JSON.stringify(properties));
        }
        component.create();
        this._initElements(component);
        var renderResult = component.render(data);
        if (renderResult instanceof Promise) {
            return renderResult.then(() => component);
        }
        return component;
    }
}
