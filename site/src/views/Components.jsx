import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment';
import Layout from './Layout';

export default newClass({
    name: 'ComponentsView',
    extends: View,

    constructor() {
        this.parent = Layout;
        this.title = 'Components';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>

                <h2 class="text-title">Lifecycle</h2>

                <div class="row row-responsive spaced">
                    <div class="col w-200">
                        <h3 class="text-paragraph-title">Render by server</h3>
                        <ul class="list">
                            <li>init(properties)</li>
                            <li>create()</li>
                            <li>render(data): Promise | Element?</li>
                        </ul>
                    </div>
                    <div class="col w-200">
                        <h3 class="text-paragraph-title">Load of the rendered components by server</h3>
                        <ul class="list">
                            <li>init(properties)</li>
                            <li>load(properties)</li>
                            <li>ready()</li>
                        </ul>
                    </div>
                    <div class="col w-200">
                        <h3 class="text-paragraph-title">Render by browser</h3>
                        <ul class="list">
                            <li>init(properties)</li>
                            <li>create()</li>
                            <li>render(data): Promise | Element?</li>
                            <li>ready()</li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
});

