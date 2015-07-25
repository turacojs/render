turaco
============================

Render components, views and layouts.

```js
import Component from 'turaco/lib/Component';

class MyListWithBadgesComponent extends Component {
   render() {
       return (<ul class="list">
           <li>Item 1 <span class="badge">1</span></li>
           <li>Item 2 <span class="badge">4</span></li>
           <li>Item 3 <span class="badge">1234</span></li>
           <li>Item 4 <span class="badge"></span></li>
       </ul>);
   }
}
```
