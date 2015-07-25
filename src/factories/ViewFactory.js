import $ from 'springbokjs-dom/lib/$';

export default class ViewFactory {
    /**
     * @param function instanceFactory
     */
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    /**
     * @param string viewName
     * @returns {View}
     */
    create(viewName) {
        var view = this.instanceFactory(viewName);
        view.$container = $.create('div');
        view.$container.attr('data-view', viewName);
        return view;
    }
}
