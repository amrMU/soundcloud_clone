import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import routes from './routes';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});