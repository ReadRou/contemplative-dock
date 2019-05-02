import Vue         from 'vue';
import VueSocketIO from 'vue-socket.io';
import store       from '../store';

const os = require('os');
let localIp;

function getIPAdress() {
    if (localIp) return localIp;
    let localIPAddress = "";
    let interfaces     = os.networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                localIPAddress = alias.address;
            }
        }
    }
    localIp = localIPAddress;
    return localIPAddress;
}

getIPAdress();

Vue.use(new VueSocketIO({
    debug     : true,
    connection: `http://${ localIp }:7001/`,
    vuex      : {
        store,
        actionPrefix  : 'socket',
        mutationPrefix: 'socket'
    },
    // options   : { path: "/my-app/" } //Optional options
}));
