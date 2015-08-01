import View from './View';
import Doctype from 'html-document/lib/Doctype';
import $ from 'springbokjs-dom/lib/$';

export default class TopLayout extends View {
    init() {
        this.$container[0].appendChild(new Doctype());
        this.$html = $.create('html').appendTo(this.$container);
        this.$head = $.create('head').appendTo(this.$html);
        this.$body = $.create('body').appendTo(this.$html);
    }

    _initElements() {
    }

    render(data) {
        if (this.head) {
            this.$head.append(this.head());
        }

        if (data.title) {
            this.$head.append($.create('title').text(data.title));
        }

        if (this.body) {
            const res = this.body(this.$body, data);
            if (res) {
                this.$body.append(res);
            }
        }

        this.$content.append(data.content);
    }

    toHtmlString() {
        return this.$container[0].innerHTML;
    }
}
