import $ from 'springbokjs-dom/lib/$';

export default class FragmentFactory {
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    /**
     * @param {Function|*} fragmentClass
     * @returns {*}
     */
    create(fragmentClass) {
        const fragment = this.instanceFactory(fragmentClass);
        fragment.$fragment = $.createFragment();
        return fragment;
    }
}
