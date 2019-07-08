/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};

    /**
     * 监听器
     * @type {{listen: {path: string, hostname: string, port: number}}}
     */
    config.cluster = {
        listen: {
            port: 7001,
            hostname: '0.0.0.0',
        }
    };

    /**
     * 数据库
     * @type {{options: {}, url: string}}
     */
    config.mongoose = {
        url: 'mongodb://127.0.0.1/contemplative-dock',
        options: {},
    };

    /**
     * 找不到路由的配置
     * @type {{pageUrl: string}}
     */
    config.notfound = {
        pageUrl: '/404',
    };

    /**
     * socketio
     */
    config.io = {
        namespance: {
            '/': {
                connectionMiddleware: [],
                packetMiddleware: [],
            },
            '/im': {
                connectionMiddleware: [],
                packetMiddleware: [],
            },
        },
        redis: {
            host: '127.0.0.1',
            post: 6379,
            db: 1,
        }
    };

    /**
     * keys
     */
    config.keys = appInfo.name + 'Pe2HDeUOUz3LYJdoGijKKbimUoigRpTJ6ePtxPe7eZHwLeutnjht48EsGYAxdPpI';

    /**
     * 中间件
     */
    config.middleware = [
        'encrypt',
    ];
    /**
     * security
     */
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: ['*']
    };
    /**
     * cors
     * @type {{allowMethods: string, origin: string}}
     */
    config.cors = {
        origin: '*', // 跨域设置cookios 不能设为 *
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    return {
        ...config,
    }
};
