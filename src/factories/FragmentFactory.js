import $ from 'springbokjs-dom/lib/$';

export default class ComponentFactory {
    constructor(instanceFactory) {
        this.instanceFactory = instanceFactory;
    }

    create(fragmentName) {
        const fragment = this.instanceFactory(fragmentName);
        fragment.$fragment = $.createFragment();
        return fragment;
    }
}
