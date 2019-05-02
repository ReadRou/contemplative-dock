module.exports = options => {
    return async function encrypt(ctx, next) {
        if (ctx.path === '/404') {
            await next();
            return ctx.body = ctx.helper.encrypt(ctx.body)
        }
        await next();
        if (ctx.body) {
            // ctx.body = ctx.helper.encrypt(ctx.body)
        }
    }
};
