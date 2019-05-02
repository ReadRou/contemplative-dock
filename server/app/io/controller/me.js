'use strict';

const Controller = require('egg').Controller;

class MeController extends Controller {
    async me_index() {
        const { ctx } = this;
        let data      = ctx.args[0];
        console.log(data);
        ctx.socket.emit('me_response', {
            sender  : 'me',
            function: 'me_index',
            data    : {
                server: 'hello',
                msg   : `I have got your msg:${ JSON.stringify(data) }`,
            }
        })
    }
}

module.exports = MeController;
