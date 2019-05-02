const {
          Controller
      } = require('egg');

class OtherController extends Controller {
    async api404() {
        const {
                  ctx
              }  = this;
        ctx.body = {
            code: 404,
            msg : '找不到该api',
        }
    }

    async test() {
        const {
                  ctx,
              }  = this;
        ctx.body = {
            hello: 'world'
        }
    }
}

module.exports = OtherController;
