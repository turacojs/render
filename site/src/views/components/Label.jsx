import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment';

export default newClass({
    name: 'LabelView',
    extends: View,

    constructor() {
        this.parent = 'layout';
        this.title = 'Label';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>

                <ul class="list">
                    <li>Item 1 <span class="label">Sucessfully saved</span></li>
                    <li>Item 2 <span class="label success">Done</span></li>
                    <li>Item 3 <span class="label error">Invalid data</span></li>
                    <li>Item 4 <span class="label warning">Be careful</span></li>
                    <li>Item 5 <span class="label"></span></li>
                </ul>

                <pre><code>{ `
import Component from 'turaco/lib/Component';
import List from 'turaco/lib/List';
import Label from 'turaco/lib/Label';

class MyListWithLabelsComponent extends Component {
    render() {
        return (<ul class="list">
            <li>Item 1 <Label>Sucessfully saved</Label></li>
            <li>Item 2 <Label type="success">Done</Label></li>
            <li>Item 3 <Label type="error">Invalid data</Label></li>
            <li>Item 4 <Label type="warning">Be careful</Label></li>
            <li>Item 5 <Label></Label></li>
        </ul>);
    }
}
                `.trim() }</code></pre>

                See also: <a href="Badge">Badge</a>

            </Fragment>
        );
    }
});

