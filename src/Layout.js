import View from './View';

export default class Layout extends View {
    constructor() {
        super();
        this.elements = ['content'];
    }

    update(view) {
        this.$content.empty().append(view.$container);
        if (this.updateTitle) {
            this.updateTitle(view.title);
        }
    }
}
