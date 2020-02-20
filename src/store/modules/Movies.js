const Movies = {
  state: {
    Movies: []
  },
  mutations: {
    setMovies (state, payload) {
      state.Movies = payload
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
  }

}
export default Movies
