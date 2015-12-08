import $ from 'springbokjs-dom/lib/$';

export default class ViewFactory {
    /**
     * @param {Function} instanceFactory
     */
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    /**
     * @param {Function|*} viewClass
     * @returns {View}
     */
    create(viewClass, options) {
        const view = this.instanceFactory(viewClass, options);
        view.$container = $.create('div');
        view.$container.attr('data-view', view.constructor.name);
        return view;
    }

    /**
     * @param {string} viewName
     * @returns {View}
     */
    load(viewName, $container, options) {
        const view = this.instanceFactory(viewName, options);
        return Promise.resolve(view).then((view) => {
            view.$container = $container;
            return view;
        });
    }
}
