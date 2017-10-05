// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

// external files
require('./assets/javascript/jquery-3.2.1.slim.min.js');
require('./assets/bootstrap/js/bootstrap.min.js')
require('./assets/bootstrap/css/bootstrap.min.css');

//our own files
require('./assets/javascript/search.js');
require('./assets/javascript/map.js');
require('./assets/javascript/styleselector.js');

//stylesheet
require('./assets/css/main-bootstrap.css');
require('./assets/css/colorsheme.min.css');
require('./assets/css/navbar.min.css');
