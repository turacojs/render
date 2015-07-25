import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment'

export default newClass({
    name: 'IndexView',
    extends: View,

    constructor() {
        this.parent = 'layout';
    },

    render(data) {
        return (
            <Fragment>
                <div class="home-banner">
                    <div class="container">
                        <h1 class="page-title">Turaco Render</h1>
                        <p>Views and Components for both browser and server</p>
                        <a class="button" href="/GettingStarted">Get Started</a>
                    </div>
                </div>

                <h2 class="text-title">Philosophy</h2>

                This framework is based on <a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a>,
                combined with <a href="http://christophehurpeau.github.io/springbokjs-dom/docs/$.html">springbokjs-dom</a>.

               <h2 class="text-title">Component example</h2>

               <pre><code>{ `
import Component from 'turaco/lib/Component';

export default class MyListWithBadgesComponent extends Component {
    render() {
       return (<ul class="list">
           <li>Item 1 <span class="badge">1</span></li>
           <li>Item 2 <span class="badge">4</span></li>
           <li>Item 3 <span class="badge">1234</span></li>
           <li>Item 4 <span class="badge"></span></li>
       </ul>);
    }
}
               `.trim() }</code></pre>

               <h2 class="text-title">View example</h2>

               <pre><code>{ `
import View from 'turaco/lib/View';
import MyListWithBadgesComponent from './MyListWithBadgesComponent';

export default class MyView extends Component {
    constructor() {
       this.title = 'My View Title';
       this.parent = 'alayout';
    }

    render() {
       return (<MyListWithBadgesComponent></MyListWithBadgesComponent>);
    }
}
               `.trim() }</code></pre>

               <h2 class="text-title">TopLayout example</h2>

               <pre><code>{ `
import TopLayout from 'turaco/lib/TopLayout';

export default class MyLayout extends TopLayout {
    head() {
       return \`
    <script src="//cdn.polyfill.io/v1/polyfill.min.js?features=all"></script>

    <!--Import style -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic' rel='stylesheet' type='text/css'>
    <link type="text/css" rel="stylesheet" href="/simple-blue.css"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
       \`;
    },

    body($body, data) {
       $body.appendText('Hello World');
    }
});
               `.trim() }</code></pre>
            </Fragment>
        );
    }
});

