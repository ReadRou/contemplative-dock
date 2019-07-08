'use strict';

const Controller = require('egg').Controller;

class MeController extends Controller {
    async me_index() {
        const { ctx } = this;
        let data      = ctx.args[0];
        console.log(data);
        ctx.socket.emit('me_response', {
            sender  : 'me',
            router: 'me_index',
            data    : {
                msg     : '我是罗兴惠，这是一个移动端的alpha例子，用于项目展示',
            }
        })
    }
}

module.exports = MeController;
