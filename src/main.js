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
require('./assets/bootstrap/js/bootstrap.min.js');
require('./assets/bootstrap/css/bootstrap.min.css');
require('../node_modules/jquery-editable-select/dist/jquery-editable-select.min.js');
require('../node_modules/jquery-editable-select/dist/jquery-editable-select.min.css');


//our own files
require('./assets/javascript/styleselector.js');
var data = JSON.parse(JSON.stringify(require('./assets/search_content.json')));

//stylesheet
require('./assets/css/main-bootstrap.css');
require('./assets/css/colorsheme.min.css');
require('./assets/css/navbar.min.css');
