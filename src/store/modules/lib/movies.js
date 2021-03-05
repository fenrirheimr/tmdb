import axios from 'axios'

export const MOVIES_LOADING = 'movies/loading'
export const MOVIES_LOADED = 'movies/loaded'
export const MOVIE_LOADING = 'movie/loading'
export const MOVIE_LOADED = 'movie/loaded'
export const TV_LOADING = 'tv/loading'
export const TV_LOADED = 'tv/loaded'

export default () => ({
  namespaced: true,
  state () {
    return {
      isLoading: false,
      isLoaded: false,
      movies: [],
      movie: '',
      tv: [],
      count: null
    }
  },
  getters: {
    isLoaded: state => state.isLoaded,
    isLoading: state => state.isLoading,
    TVisLoaded: state => state.isLoaded,
    TVisLoading: state => state.isLoading,
    movies: state => state.movies,
    movie: state => state.movie,
    tv: state => state.tv
  },
  mutations: {
    [MOVIES_LOADING]: (state, flag) => {
      state.isLoading = flag
    },
    [MOVIES_LOADED]: (state, movies, flag) => {
      state.movies = movies
      state.isLoading = flag
    },
    [MOVIE_LOADING]: (state, flag) => {
      state.isLoading = flag
    },
    [MOVIE_LOADED]: (state, movie, flag) => {
      state.movie = movie
      state.isLoading = flag
    },
    [TV_LOADING]: (state, flag) => {
      state.TVisLoading = flag
    },
    [TV_LOADED]: (state, tv, flag) => {
      state.tv = tv
      state.TVisLoading = flag
    }
  },
  actions: {
    async loadMovies ({ state, commit, dispatch }, { year, type }) {
      if (!state.isLoading) {
        commit(MOVIES_LOADING, true)
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=80f9c7e2bc4b7ae8ad47c0ccedc857e8&sort_by=popularity.asc&year=${year}`)
        const movies = data
        commit(MOVIES_LOADED, movies, false)
      }
    },
    async loadTV ({ state, commit, dispatch }, { year, type }) {
      if (!state.TVisLoading) {
        commit(TV_LOADING, true)
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=80f9c7e2bc4b7ae8ad47c0ccedc857e8&sort_by=popularity.asc&year=${year}`)
        const tv = data
        commit(TV_LOADED, tv, false)
      }
    },
    async getMovieById ({ state, commit, dispatch }, { id }) {
      if (!state.isLoading) {
        commit(MOVIE_LOADING, true)
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=80f9c7e2bc4b7ae8ad47c0ccedc857e8`)
        const movie = data
        console.log('movie', movie)
        commit(MOVIE_LOADED, movie, false)
      }
    }
  }
})
