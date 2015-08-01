import { EventEmitter } from 'events';

export default class Component extends EventEmitter {
    /**
     * Invoked on both server and browser (even the first time for the browser)
     */
    init(properties) {
    }

    /**
     * Invoked only on browser just the first time
     */
    load() {
    }

    /**
     * Invoked on both server and browser (except the first time for the browser)
     */
    create(data) {
    }

    /**
     * Invoked on both server and browser (except the first time for the browser)
     */
    render(data) {
    }

    /**
     * Invoked once on the browser
     *
     * Register events here
     */
    /*component.ready can be undefined
    ready() {

    }*/

    /**
     * Invoked once on the browser
     */
    /*component.destroy can be undefined
    destroy() {

    }*/

    toHtmlString() {
        return this.$container.outerHTML;
    }
}
