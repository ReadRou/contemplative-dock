'use strict';
const listData   = require('../../data/today');
const swiperData = require('../../data/swiper');
const Controller = require('egg').Controller;

class HomeController extends Controller {

    async home_today_list_index() {
        const { ctx, config } = this;
        ctx.socket.emit('home_today_list_response', {
            sender  : 'home',
            function: 'home_today_list_index',
            data    : listData
        })
    }

    async home_today_swiper_index() {
        const { ctx, config } = this;
        ctx.socket.emit('home_today_swiper_response', {
            sender  : 'home',
            function: 'home_today_swiper_index',
            data    : swiperData
        })
    }

    async home_week_list_index() {
        const { ctx, config } = this;
        ctx.socket.emit('home_week_list_response', {
            sender  : 'home',
            function: 'home_week_list_index',
            data    : swiperData.slice(0, 1)
        })
    }

    async home_month_list_index() {
        const { ctx, config } = this;
        ctx.socket.emit('home_month_list_response', {
            sender  : 'home',
            function: 'home_month_list_index',
            data    : swiperData.slice(0, 2)
        })
    }
}

module.exports = HomeController;
