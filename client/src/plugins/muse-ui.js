import Vue       from 'vue';
import MuseUI    from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';
import Helpers   from 'muse-ui/lib/Helpers';

Vue.use(MuseUI).use(NProgress).use(Helpers);
