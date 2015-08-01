import Fragment from '../Fragment';
import $ from 'springbokjs-dom/lib/$';

export default class LoginFragment extends Fragment {
    init() {
        this.$form = this.helper.createFormForModel('User').action('/login').setClass('w400 centered big')
            .append('<h2>' + this.helper.tC('Sign in') + '</h2>')
            .fieldsetStart()
                .input('_id').setAttribute('name', 'login').label('Username').placeholder('Enter your username').end()
                .input('pwd').setAttribute('type', 'password').setAttribute('name', 'password').label('Password').end()
                .submit('Login').container().addClass('center').end()
            .end(false);

        $.create('div')
            .addClass('clear', 'mt20')
            .append(this.$form)
            .appendTo(this.$fragment);
    }
}
