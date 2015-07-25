export default class RendererDispatcher {
    constructor(renderers) {
        Object.keys(renderers).forEach(key => {
            this['render' + key[0].toUpperCase() + key.substr(1)] = renderers[key];
        });
    }
}
