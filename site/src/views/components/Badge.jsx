import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment';

export default newClass({
    name: 'BadgeView',
    extends: View,

    constructor() {
        this.parent = 'layout';
        this.title = 'Badge';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>

                <ul class="list">
                    <li>Item 1 <span class="badge">1</span></li>
                    <li>Item 2 <span class="badge">4</span></li>
                    <li>Item 3 <span class="badge">1234</span></li>
                    <li>Item 4 <span class="badge"></span></li>
                </ul>


                <pre><code>{ `
import Component from 'turaco/lib/Component';
import List from 'turaco/lib/List';
import Badge from 'turaco/lib/Badge';

class MyListWithBadgesComponent extends Component {
   render() {
       return (<List>
           <li>Item 1 <Badge>1</Badge></li>
           <li>Item 2 <Badge>4</Badge></li>
           <li>Item 3 <Badge>1234</Badge></li>
           <li>Item 4 <Badge></Badge></li>
       </List>);
   }
}
                `.trim() }</code></pre>

                See also: <a href="label">Label</a>

            </Fragment>
        );
    }
});

