import $ from 'springbokjs-dom/lib/$';

export default class ComponentFactory {
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    create(componentName, $container) {
        var component = this.instanceFactory(componentName);
        if ($container) {
            component.$container = $container;
        } else {
            component.$container = $.create('div');
        }
        component.$container.attr('data-component', componentName);
        component.$container.on('dispose', () => component.destroy());
        component.elements = component.elements || [];
        return component;
    }
}
