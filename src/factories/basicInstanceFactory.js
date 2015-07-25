export default function createBasicInstanceFactory(dirname, suffix) {
    return (name) => {
        const path = dirname + name + (suffix || '') + '.jsx';
        let module = require(path);
        if (typeof module !== 'function') {
            module = module.default;
        }
        const view = new module();
        return view;
    }
}
