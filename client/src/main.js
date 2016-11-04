// require('style!css!./styles/main.css');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import TodoList from './components/TodoList';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: TodoList }
];

const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
