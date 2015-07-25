import ViewRenderer from './ViewRenderer';
import ViewFactory from '../factories/ViewFactory';
import ComponentRenderer from './ComponentRenderer';
import ComponentFactory from '../factories/ComponentFactory';
import createBasicInstanceFactory from '../factories/basicInstanceFactory';

export default function createExpressEngine(dirname) {
    if (dirname[dirname.length -1] !== '/') {
        dirname += '/';
    }

    const componentRenderer = new ComponentRenderer((function() {
        return new ComponentFactory(createBasicInstanceFactory(dirname + 'components/', 'Component'));
    })());

    const viewRenderer = new ViewRenderer((function() {
        return new ViewFactory(createBasicInstanceFactory(dirname));
    })(), componentRenderer);

    return (path, data, callback) => {
        const name = path.slice(dirname.length, -4);
        let result = viewRenderer.createThenRender(name, data.properties, data);
        if (typeof result.then === 'function') {
            return result.then((result) => callback(null, result.toHtmlString())).catch((err) => callback(err));
        }
        callback(null, result.toHtmlString());
    };
}
