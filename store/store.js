import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
  state: {
    previous_page: 0,
    current_page: 1,
    items_count: 10
  },
  mutations: {
    [types.PREVIOUS_PAGE]: (state, payload) => {
      state.previous_page = payload;
    },
    [types.CURRENT_PAGE]: (state, payload) => {
      state.current_page = payload;
    },
  },
  actions: {
    [types.ACTION_PREVIOUS_PAGE]({ commit }, payload) {
      commit(types.PREVIOUS_PAGE, payload);
    },
    [types.ACTION_CURRENT_PAGE]({ commit }, payload) {
      commit(types.CURRENT_PAGE, payload);
    },
  }
});