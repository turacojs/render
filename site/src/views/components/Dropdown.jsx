import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment';

export default newClass({
    name: 'DropdownView',
    extends: View,

    constructor() {
        this.parent = 'Layout';
        this.title = 'Dropdown';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>
            </Fragment>
        );
    }
});

