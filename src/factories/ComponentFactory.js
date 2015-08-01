import $ from 'springbokjs-dom/lib/$';

export default class ComponentFactory {
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    create(componentClass, $container) {
        const component = this.instanceFactory(componentClass);
        if ($container) {
            component.$container = $container;
        } else {
            component.$container = $.create('div');
        }

        component.$container.attr('data-component', componentClass.name);
        component.$container.attr(
            'data-component-preload',
            component.ready !== undefined || component.destroy !== undefined
        );

        if (component.destroy) {
            component.$container.on('dispose', () => component.destroy());
        }

        return component;
    }

    load(componentName, $container) {
        const component = this.instanceFactory(componentName);

        return Promise.resolve(component).then(() => {
            component.$container = $container;

            if (component.destroy) {
                component.$container.on('dispose', () => component.destroy());
            }

            if (component.elements && component.elements.length) {
                component.elements.forEach((elementName) => {
                    if (!component['$' + elementName]) {
                        component['$' + elementName] = $container.find('[data-role="' + elementName + '"]');
                    }
                });
            }

            return component;
        });
    }
}
