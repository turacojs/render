/* eslint new-cap: 0 */
// jscs:disable requireCapitalizedConstructors

export default function createBasicInstanceFactory(baseURL, suffix = '') {
    return (nameOrClass) => {
        if (typeof nameOrClass === 'function') {
            const view = new nameOrClass();
            return view;
        }

        return System.import(baseURL + nameOrClass + suffix)
            .then(Class => new Class());
    };
}
