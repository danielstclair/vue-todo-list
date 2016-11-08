import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
  todos: [],
  activeTodo: {},
  inputVal: '',
  isComplete: false
};

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
