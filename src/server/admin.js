const mount = require('koa-mount');
const serve = require('koa-static');

const ADMIN_FOLDER = '/__admin';

const serveAdmin = mount(ADMIN_FOLDER, serve(__dirname + '/../client'));
const ensureAdmin = (ctx, next) => {
    if (ctx.request.originalUrl.indexOf(ADMIN_FOLDER) !== 0) {
        return next();
    }
};

module.exports = {
    serveAdmin,
    ensureAdmin
};