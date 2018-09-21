const Koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');

const App = new Koa();

App.use(mount('/__admin', serve(__dirname + '/../client')));

App.use((ctx, next) => {
    if (ctx.request.originalUrl.indexOf('/__admin') === 0) {
        return next();
    }

    ctx.body = 'it\'s the solid rock for providing a mock. url:' + ctx.request.originalUrl;
});

module.exports = App;