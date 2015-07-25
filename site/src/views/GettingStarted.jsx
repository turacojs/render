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


                <h2 class="text-title">Use with express</h2>


                <pre><code>{ `
import 'html-document/lib/global';
global.React = global.$ = require('springbokjs-dom/lib/$');

import express from 'express';
import expressEngine from 'turaco/lib/renderers/expressEngine';

const app = express();

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');

app.engine('jsx', expressEngine(app.get('views')));


app.get('/', function(req, res) {
    res.render('Index');
});

                `.trim() }</code></pre>
            </Fragment>
        );
    }
});

