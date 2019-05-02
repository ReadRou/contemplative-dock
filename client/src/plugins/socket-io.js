import Vue         from 'vue';
import VueSocketIO from 'vue-socket.io';
import store       from '../store';
import Axios       from "axios";

let ip = '';
Axios.get('http://localhost:7001/getIP').then(response => {
    for (const element of response.data) {
        ip += element
    }
});

Vue.use(new VueSocketIO({
    debug     : false,
    connection: `http://${ ip }:7001/`,
    vuex      : {
        store,
        actionPrefix  : 'socket',
        mutationPrefix: 'socket'
    },
}));
