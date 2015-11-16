export default class View {
    init() {}

    toHtmlString() {
        return this.$container[0].outerHTML;
    }
}
