/* global S */
export default class DropdownComponent extends S.Component {
    init() {
        this.elements.push('link', 'menu');
    }

    /**
     * Invoked on both server and browser (except the first time for the browser)
     */
    create() {
        this.$container.addClass('dropdown');
        this.$link = $.create('a').appendTo(this.$container)
                .addClass('dropdown-toggle')
                .setAttribute('href', '#')
                .setAttribute('onclick', 'return false');
        this.$menu = $.create('ul').addClass('dropdown-menu selectable linksList spaced').appendTo(this.$container);
    }

    render(data) {
        this.$link.text(data.title);
    }

    append(item) {
        $.create('li').append(item).appendTo(this.$menu);
    }

    appendText(item) {
        $.create('li').appendText(item).appendTo(this.$menu);
    }

    ready() {
        console.log('prepare DropdownComponent');
        this.$link.on('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.$menu.stop();
            this.$container.toggleClass('open');
            return false;
        });
    }
}
