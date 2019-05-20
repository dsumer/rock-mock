import * as mount from 'koa-mount';
import * as serve from 'koa-static';
import * as compose from 'koa-compose';

const ADMIN_FOLDER = '/__admin';

const redirectAdmin = (ctx, next) => {
    if (ctx.request.originalUrl === ADMIN_FOLDER) {
        ctx.redirect(ADMIN_FOLDER + '/');
        return;
    }
    return next();
};
const serveAdmin = mount(ADMIN_FOLDER, serve(__dirname + '/../client'));
const ensureAdmin = (ctx, next) => {
    if (ctx.request.originalUrl.indexOf(ADMIN_FOLDER) !== 0) {
        return next();
    }
};

const admin = compose([redirectAdmin, serveAdmin, ensureAdmin]);

export default admin;
