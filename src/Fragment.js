export default class Fragment {

    get $container() {
        return this.$fragment;
    }

    render() {
    }

    toHtmlString() {
        return this.$fragment[0].innerHTML;
    }
}
