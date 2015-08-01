export default function createBasicInstanceFactory(dirname, suffix) {
    return (nameOrClass) => {
        if (typeof nameOrClass === 'function') {
            const view = new nameOrClass();
            return view;
        }
        const path = dirname + nameOrClass + (suffix || '');
        let module = require(path);
        if (typeof module !== 'function') {
            module = module.default;
        }
        const view = new module();
        return view;
    }
}
