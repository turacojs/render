import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment';

export default newClass({
    name: 'GettingStartedView',
    extends: View,

    constructor() {
        this.parent = 'layout';
        this.title = 'Getting Started';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>

                <h2 class="text-title">Installation</h2>

                <h3 class="text-paragraph-title">NPM</h3>

                <pre><code>npm install --save turaco</code></pre>

                <h3 class="text-paragraph-title">Bower</h3>

                <p>Even if I advise against it, you can find turaco using bower</p>

                <pre><code>bower install --save turaco</code></pre>

                <h3 class="text-paragraph-title">CDN</h3>

                Todo.
            </Fragment>
        );
    }
});

