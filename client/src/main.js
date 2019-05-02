import Vue    from 'vue'
import App    from './App.vue'
import router from './routers'
import store  from './store'
import './plugins/muse-ui'
import './plugins/vue-dplayer'
import './plugins/socket-io'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render : h => h(App)
}).$mount('#app');
