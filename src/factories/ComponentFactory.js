import $ from 'springbokjs-dom/lib/$';

export default class ComponentFactory {
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
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

    create(componentClass, $container) {
        var component = this.instanceFactory(componentClass);
        if ($container) {
            component.$container = $container;
        } else {
            component.$container = $.create('div');
        }
        this._initElements(component);
        component.$container.attr('data-component', componentClass.name);
        component.$container.attr(
            'data-component-preload',
            component.ready !== undefined || component.destroy !== undefined
        );
        if (component.destroy) {
            component.$container.on('dispose', () => component.destroy());
        }
        component.elements = component.elements || [];
        return component;
    }

    load(componentName, $container) {
        var component = this.instanceFactory(componentName);
        return Promise.resolve(component).then(() => {
            component.$container = $container;
            if (component.destroy) {
                component.$container.on('dispose', () => component.destroy());
            }
            if (component.elements && component.elements.length) {
                component.elements.forEach((elementName) => {
                    if (!component['$' + elementName]) {
                        component['$' + elementName] = $container.find('[data-role="' + elementName +'"]');
                    }
                });
            }
            return component;
        });
    }
}
