import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment';

export default newClass({
    name: 'CardView',
    extends: View,

    constructor() {
        this.parent = 'layout';
        this.title = 'Card';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>

                <div class="row row-responsive spaced">
                    <div class="col w-200">
                        <div class="card">
                            <div class="content">
                                <h3 class="card-title text-headline">
                                    title
                                </h3>
                                content
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <pre><code>{ `
import Component from 'turaco/lib/Component';
import Card from 'turaco/lib/Card';

class MyCard extends Component {
    render() {
        return (<Card>
            <CardContent>
                <CardTitle>
                    title
                </CardTitle>
                content
            </CardContent>
        </Card>);
    }
}
                        `.trim() }</code></pre>
                    </div>
                </div>
            </Fragment>
        );
    }
});

