const Koa = require('koa');
const {serveAdmin, ensureAdmin} = require('./admin');
const mapping = require('./mapping');

const App = new Koa();

App.use(serveAdmin);
App.use(ensureAdmin);

App.use(mapping);

App.use((ctx) => {
    ctx.body = 'No mapping found for url: ' + ctx.request.originalUrl;
});

module.exports = App;