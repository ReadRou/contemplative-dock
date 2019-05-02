'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
              io,
              router,
              controller,
          } = app;

    /**
     * socket
     * home: 首页数据
     */
    io.route('home_today_list_index', io.controller.home.home_today_list_index);
    io.route('home_today_swiper_index', io.controller.home.home_today_swiper_index);
    io.route('home_week_list_index', io.controller.home.home_week_list_index);
    io.route('home_month_list_index', io.controller.home.home_month_list_index);

    /**
     * http
     */
    router.all('/404', controller.other.api404);
    router.get('/test', controller.other.test);
    router.get('/getIP', controller.other.getIP);
};
