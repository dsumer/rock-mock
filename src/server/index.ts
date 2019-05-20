import * as Koa from 'koa';
import admin from './admin';
import mapping from './mapping';

const App = new Koa();

App.use(admin);

App.use(mapping);

App.use((ctx) => {
    ctx.body = 'No mapping found for url: ' + ctx.request.originalUrl;
});
export default App;
