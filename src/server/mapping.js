const mappings = {
    '/user/1': {
        name: 'oleee'
    },
    '/user/2': (ctx) => {
        ctx.body = {
            name: 'krank'
        }
    }
};


const mapping = (ctx, next) => {
    const obj = mappings[ctx.request.originalUrl];
    if (typeof obj === 'object') {
        ctx.body = obj;
        return;
    } else if (typeof  obj === 'function') {
        obj(ctx.response);
        return;
    }
    next();
};

module.exports = mapping;