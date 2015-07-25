export default class FragmentRenderer {
    /**
     * @param FragmentFactory factory
     */
    constructor(factory) {
        this.factory = factory;
    }

    createThenRender(fragmentName, data) {
        var fragment = this.factory.create(fragmentName);
        return this.render(fragment, data);
    }

    render(fragment, data) {
        fragment.render(data);
        if (fragment.parent) {
            return this.createThenRender(fragment.parent, {
                title: fragment.title,
                content: fragment.$container,
            });
        }
        return fragment;
    }
}
