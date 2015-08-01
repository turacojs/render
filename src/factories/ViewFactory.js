import $ from 'springbokjs-dom/lib/$';

export default class ViewFactory {
    /**
     * @param {Function} instanceFactory
     */
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    /**
     * @param {string} viewName
     * @returns {View}
     */
    create(viewName) {
        const view = this.instanceFactory(viewName);
        view.$container = $.create('div');
        view.$container.attr('data-view', viewName);
        return view;
    }
}
