import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);
Vue.config.productionTip = false;
new Vue({
    router: router,
    render: function (h) { return h(App); },
}).$mount('#app');
//# sourceMappingURL=main.js.map