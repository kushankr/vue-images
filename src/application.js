import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allPhotosMap: {}
  },
  mutations: {
    setAllPhotosMap(state, payload) {
      state.allPhotosMap = Object.assign({}, state.allPhotosMap, payload);
    }
  }
});

export default store;