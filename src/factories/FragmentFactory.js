import $ from 'springbokjs-dom/lib/$';

export default class FragmentFactory {
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    /**
     * @param {Function|*} fragmentClass
     * @returns {*}
     */
    create(fragmentClass, options) {
        const fragment = this.instanceFactory(fragmentClass, options);
        fragment.$fragment = $.createFragment();
        return fragment;
    }
}
