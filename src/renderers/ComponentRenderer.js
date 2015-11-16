import ComponentFactory from '../factories/ComponentFactory';

export default class ComponentRenderer {
    /**
     * @param {ComponentFactory|Function} factory
     */
    constructor(factory) {
        if (typeof factory === 'function') {
            factory = new ComponentFactory(factory);
        }

        this.factory = factory;
    }

    createThenRender(componentClass, properties, data) {
        const component = this.factory.create(componentClass);
        return this.render(component, properties, data);
    }

    _setElementsRole(component) {
        if (component.elements && component.elements.length) {
            component.elements.forEach((elementName) => {
                if (component['$' + elementName]) {
                    component['$' + elementName].setAttribute('data-role', elementName);
                }
            });
        }
    }

    _setComponentsRole(component) {
        if (component.components && component.components.length) {
            component.components.forEach((componentName) => {
                if (!component[componentName]) {
                    throw new Error('Missing component ' + componentName);
                }

                component[componentName].$container.setAttribute('data-role', componentName);
            });
        }
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

        const renderResult = component.render(data);
        this._setElementsRole(component);
        this._setComponentsRole(component);

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
