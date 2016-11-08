// require('style!css!./styles/main.css');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

import store from './store';

import App from './App';
import TodoList from './components/TodoList';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/', component: TodoList }
];

const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});
