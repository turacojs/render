import $ from 'springbokjs-dom/lib/$';
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

        this._initElements(component);

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
