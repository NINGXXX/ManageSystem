import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ViewUI from 'view-design';

import 'view-design/dist/styles/iview.css';
import './assets/css/icons/iconfont.css'
import './assets/css/common.css'


Vue.config.productionTip = false

Vue.use(ViewUI)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
