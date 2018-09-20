const Koa = require('koa');
const App = new Koa();

App.use((ctx) => {
    ctx.body = 'it\'s the solid rock for providing a mock.';
});

module.exports = App;