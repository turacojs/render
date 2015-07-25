import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment'

export default newClass({
    name: 'IntroductionView',
    extends: View,

    constructor() {
        this.parent = 'Layout';
        this.title = 'Introduction';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>

                <h2 class="text-title">Definitions</h2>

                <p>A <strong>layout</strong> is a view container that has a title and a content.</p>

                <p>A <strong>view</strong> is supposed to represent what a user is going to see on the page:
                    a post from a blog, a list of photos, this is a glue for the components.
                    Views also decide how the render for mobile or desktop is organized.</p>

                <p>a <strong>component</strong> is something to display, it has a complete lifecycle.
                    It can be small, like a button or an autocomplete input, or big like a list, a menu, ...</p>

                <p>A <strong>TopLayout</strong> is the highest place for a layout and tells what is inside
                    head and body.</p>

                <h2 class="text-title">Components</h2>

                <p>
                    properties vs data: properties are displayed in the dom as attributes.
                    Data is an object containing the data.

                    Typically, property is configuration and data is objects necessary for the render.

                    Properties are accessible in browser after a server render whereas data aren't
                </p>

            </Fragment>
        );
    }
});

