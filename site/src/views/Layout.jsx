import { newClass } from 'esnext-class';
import TopLayout from 'turaco/lib/TopLayout';

export default newClass({
    name: 'Layout',
    extends: TopLayout,

    head() {
        return `
<!--Polyfills-->
<script>
  'article aside footer header nav section time main'.replace(/\w+/g,function(n){document.createElement(n)})
</script>
<script src="//cdn.polyfill.io/v1/polyfill.min.js?features=all"></script>

<!--Import style -->
<link href='http://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic' rel='stylesheet' type='text/css'>
<link type="text/css" rel="stylesheet" href="/simple-blue.css"  media="screen,projection"/>

<!--Let browser know website is optimized for mobile-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        `;
    },

    body($body, data) {
        console.log(data);
        const $container = $.create('div').setAttribute('class', 'container-page').appendTo($body);
        const $nav = $.create('nav').setAttribute('class', 'nav-col').appendTo($container);
        const $ulMenu = $.create('ul').setAttribute('class', 'list links').appendTo($nav);

        for (let elt of [
            {
                name: 'About',
                url: '/'
            },
            {
                name: 'Get Started',
                url: '/GettingStarted'
            },
            {
                name: 'Components',
                url: '/Components'
            },
            {
                name: 'Views',
                url: '/Views'
            },
            {
                name: 'Turaco Styl',
                url: 'http://turacojs-styl.chapplications.com/'

            },
            {
                name: 'Components',
                show: data.category === 'components',
                collection: [
                    { name: 'Badge', url: '/components/Badge' },
                    { name: 'Card', url: '/components/Card' },
                    // { name: 'Dropdown', url: '/components/Dropdown' },
                    // { name: 'Label', url: '/components/Label' },
                ]
            }
        ]) {
            let $li = $.create('li').appendTo($ulMenu);
            if (elt.url) {
                $li.append($.createElement('a', {href: elt.url}, $.textNode(elt.name)));
            } else {
                // TODO make components...
                let $a = $.create('a')
                    .setAttribute(
                        'onclick',
                        "var s = this.nextElementSibling.style; s.display = s.display === 'none' ? 'block' : 'none'"
                    )
                    .appendText(elt.name)
                    .appendTo($li);

                let $innerUl = $.create('ul').setAttribute('class', 'list links').appendTo($li);
                if (!elt.show) {
                    $innerUl.setAttribute('style', 'display: none');
                }

                for (let subelt of elt.collection) {
                    let $innerLi = $.create('li').appendTo($innerUl);
                    $innerLi.append($.createElement('a', {href: subelt.url}, $.textNode(subelt.name)));
                }

            }
        }

        let $main = $.create('main').setClass('main-col').appendTo($container);
        this.$content = $main;
    }
});
