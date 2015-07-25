import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment';

export default newClass({
    name: 'ViewsView',
    extends: View,

    constructor() {
        this.parent = 'layout';
        this.title = 'Views';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>

                <h2 class="text-title">Views and layouts</h2>

                <p>
                    Views has title and a layout parent. You can define them in the constructor like this:
                </p>

                <pre><code>{ `
 import View from 'turaco/lib/View';

 export default class MyView extends View {
    constructor() {
        this.parent = 'mylayout';
        this.title = 'Title of the view';
    },
 });
                `.trim() }</code></pre>
            </Fragment>
        );
    }
});

