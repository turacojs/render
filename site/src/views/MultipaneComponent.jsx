import { newClass } from 'esnext-class';
import View from 'turaco/lib/View';
import Fragment from 'turaco/lib/elements/Fragment'

export default newClass({
    name: 'MultipaneComponentView',
    extends: View,

    constructor() {
        this.parent = 'layout';
        this.title = 'MultipaneComponent';
    },

    render(data) {
        return (
            <Fragment>
                <h1 class="page-title">{this.title}</h1>

                <h2 class="text-title">Example</h2>


                <pre><code>{ `
import MultipaneComponent from 'turaco/lib/components/MultipaneComponent';
import UserListFragment from '../users/UserListFragment';
import UserViewFragment from '../users/UserViewFragment';

class UserTabComponent extends MultipaneComponent {
    init() {
        const $row = this.$container.addClass('row');
        this.$colList = <div></div>.appendTo($row);
        this.$colView = <div></div>.appendTo($row);
    }

    render(data) {
        this.user = data.user;
        if (this.smallSize) {
            this.toSmallSize();
        } else {
            toMediumSize();
        }
        this.$userListFragment = <UserListFragment></UserListFragment>.appendTo(this.$colList);
        this.$userViewFragment = <UserViewFragment></UserViewFragment>.appendTo(this.$colView);
    }

    toSmallSize() {
        if (this.user) {
            this.$colList.hide();
        } else {
            this.$colView.hide();
        }
        this.$colList.removeClass('col w200');
        this.$colView.removeClass('col');
    }

    toMediumSize() {
        this.$colList.addClass('col').show();
        this.$colView.addClass('col');
        if (this.user) {
            this.$colView.addClass('w200');
        }
    }

    ready() {
        this.$userListFragment.on('viewUser', (user) => {
            this.user = user;
            if (this.smallSize) {
                this.$colList.hide();
                this.$userViewFragment.hide();
                this.$colView.update(user);
            } else {
                this.$colList.addClass('w200');
            }
        });
        this.$userViewFragment.on('close', () => {
            if (this.smallSize) {
                this.$colView.hide();
                this.$colList.show();
            } else {
                this.$colList.removeClass('w200');
            }
        });
    }
}
                `.trim() }</code></pre>

            </Fragment>
        );
    }
});

