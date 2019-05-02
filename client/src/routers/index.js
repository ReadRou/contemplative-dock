import Vue            from 'vue';
import Router         from 'vue-router';
import HomeRouter     from './home';
import VideoRouter    from './video';
import DiscoverRouter from './discover';
import MeRouter       from "./me";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base  : process.env.BASE_URL,
    routes: [
        HomeRouter,
        VideoRouter,
        DiscoverRouter,
        MeRouter,
        {
            path    : '/*',
            redirect: '/home'
        }
    ]
})
