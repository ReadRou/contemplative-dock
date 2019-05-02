'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    mongoose: {
        enable : true,
        package: 'egg-mongoose',
    },
    io      : {
        enable : true,
        package: 'egg-socket.io',
    },
    redis   : {
        enable : true,
        package: 'egg-redis',
    },
    cors    : {
        enable : true,
        package: 'egg-cors',
    },
    origin  : {
        enable : true,
        package: 'egg-origin',
    }
};
