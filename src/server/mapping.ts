const mappings = require('./mappings.json');

mappings.sort((mapping) => {
    switch (mapping.type) {
        case 'equal':
            return 0;
        case 'eval':
            return 1;
        default:
            return -1;
    }
});

function normalizeUrl(url) {
    if (!url) {
        url = '';
    }

    if (url.endsWith('/')) {
        url = url.slice(0, url.length - 1);
    }

    return url.toLowerCase().trim();
}

function findRelevantMapping(ctx, mapping) {

    switch (mapping.type) {
        case 'equal':
            const request = mapping.request;

            if (!request) {
                return false;
            }

            const incomingRequest = ctx.request;

            if (normalizeUrl(incomingRequest.url) !== normalizeUrl(request.url)) {
                return false;
            }

            if (request.method && request.method.toLowerCase().trim() !== incomingRequest.method.toLowerCase().trim()) {
                return false;
            }
            return true;
        case 'eval':
            const func = mapping.function;

            if (!func) {
                return false;
            }

            const evaldFunc = Function("ctx", func);

            return evaldFunc(ctx);
    }

    return false;
}

const mapping = (ctx, next) => {
    const relevantMapping = mappings.find(findRelevantMapping.bind(null, ctx));

    if (relevantMapping && relevantMapping.response) {
        Object.assign(ctx.response, relevantMapping.response);
        return;
    }

    next();
};

export default mapping;
