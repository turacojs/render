import $ from 'springbokjs-dom/lib/$';

export default class ViewFactory {
    /**
     * @param {Function} instanceFactory
     */
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    /**
     * @param {Function} viewClass
     * @returns {View}
     */
    create(viewClass) {
        const view = this.instanceFactory(viewClass);
        view.$container = $.create('div');
        view.$container.attr('data-view', viewClass.name);
        return view;
    }

    /**
     * @param {string} viewName
     * @returns {View}
     */
    load(viewName, $container) {
        const view = this.instanceFactory(viewName);
        view.$container = $container;
        return view;
    }
}
