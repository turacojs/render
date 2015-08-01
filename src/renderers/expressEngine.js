import ViewRenderer from './ViewRenderer';
import ComponentRenderer from './ComponentRenderer';
import createBasicInstanceFactory from '../factories/basicInstanceFactory';

export default function createExpressEngine(dirname) {
    if (dirname[dirname.length - 1] !== '/') {
        dirname += '/';
    }

    const componentRenderer = new ComponentRenderer(
        createBasicInstanceFactory(dirname + 'components/', 'Component')
    );

    const viewRenderer = new ViewRenderer(
        createBasicInstanceFactory(dirname, 'View'),
        componentRenderer
    );

    return (path, data, callback) => {
        const name = path.slice(dirname.length, -3);
        let result = viewRenderer.createThenRender(name, data.properties, data);
        if (typeof result.then === 'function') {
            return result.then((result) => callback(null, result.toHtmlString())).catch((err) => callback(err));
        }

        callback(null, result.toHtmlString());
    };
}
