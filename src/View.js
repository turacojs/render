export default class View {
    init() {}

    toHtmlString() {
        return this.$container[0].outerHTML;
    }

    component(componentClass) {
        return (properties, data) => {
            if (!data && properties) {
                data = properties && properties.data;
                delete properties.data;
            }

            return this.renderer.componentRenderer.createThenRender(componentClass, properties, data);
        };
    }
}
