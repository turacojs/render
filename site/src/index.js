import 'html-document/lib/global';
global.React = global.$ = require('springbokjs-dom/lib/$');
import express from 'express';
import errorParser from 'springbokjs-errors';
import expressEngine from 'turaco/lib/renderers/expressEngine';
const fs = require('fs');
const app = express();
const argv = require('minimist')(process.argv.slice(2));
const errorsParser = require('springbokjs-errors');
import ErrorHtmlRenderer from 'springbokjs-errors/lib/HtmlRenderer';
const errorHtmlRenderer = new ErrorHtmlRenderer();

process.on('uncaughtException', function(err) {
    try {
        errorsParser.log(err);
    } catch (err2) {
        console.error(err.stack);
        console.error(err2.stack);
    }
});

app.set('view engine', 'js');
app.set('views', __dirname + '/views');

app.engine('js', expressEngine(app.get('views')));

app.locals.code = function(args) {
    var contents = args[0]
        .trim()
        .replace(/&(?!\w+;)/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    return '<pre><code>' + contents + '</code></pre>';
};

app.use(express.static(__dirname + '/../public'));

app.use(function(err, req, res, next) {
    errorsParser.log(err);
    if (argv.production) {
        res.status(500).send('Error: ' + err.message);
    } else {
        res.status(500).send(errorHtmlRenderer.render(err));
    }
});


app.get('/', function(req, res) {
    res.render('Index');
});

app.get(/^[1-9a-zA-Z\/\-]+$/, function(req, res) {
    console.log(req.path);
    res.render(req.path.substr(1), { dataLayout: { category: req.path.split('/')[1] } });
});


app.listen(argv.port || 3000);
