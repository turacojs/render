/* eslint new-cap: 0 */
// jscs:disable requireCapitalizedConstructors

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

        return new module();
    };
}
