import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SMovies: []
  },
  mutations: {
    setMovies (state, payload) {
      state.SMovies = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
