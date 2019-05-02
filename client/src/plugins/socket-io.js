import Vue         from 'vue';
import VueSocketIO from 'vue-socket.io';
import store       from '../store';

Vue.use(new VueSocketIO({
    debug     : true,
    connection: 'http://192.168.43.174/',
    vuex      : {
        store,
        actionPrefix  : 'socket',
        mutationPrefix: 'socket'
    },
    // options   : { path: "/my-app/" } //Optional options
}));
