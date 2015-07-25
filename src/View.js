export default class View {
    init() {}
    create() {}

    toHtmlString() {
        return this.$container[0].outerHTML;
    }
}
