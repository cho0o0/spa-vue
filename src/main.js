// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
/* eslint-disable */
import revealCss from '../node_modules/reveal.js/css/reveal.css';
import themeCss from '../node_modules/reveal.js/css/theme/moon.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
