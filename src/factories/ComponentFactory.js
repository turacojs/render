import $ from 'springbokjs-dom/lib/$';

export default class ComponentFactory {
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    create(componentClass, $container, options) {
        const component = this.instanceFactory(componentClass, options);
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

    load(componentName, $container, options) {
        const component = this.instanceFactory(componentName, options);

        return Promise.resolve(component).then((component) => {
            component.$container = $container;

            if (component.destroy) {
                component.$container.on('dispose', () => component.destroy());
            }

            return component;
        });
    }
}
