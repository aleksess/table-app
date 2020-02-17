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
    async downloadMovies (context, title) {
      const response = await fetch(
        `http://api.tvmaze.com/search/shows?q=${title}`
      )
      const responseParsed = await response.json()
      context.commit('setMovies', responseParsed)
    }
  },
  modules: {
  }
})
