import { mapActions, mapGetters, mapState } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      years: null,
      types: null,
      type: [
        'movie',
        'tv'
      ],
      defaultYear: 2021
    }
  },
  computed: {
    ...mapGetters({
      movies: 'movies/movies',
      tv: 'movies/tv',
      isLoading: 'movies/isLoading',
      isLoaded: 'movies/isLoaded',
      TVisLoaded: 'movies/TVisLoaded'
    }),
    ...mapState({
    }),
    items () {
      const movies = this.movies.results
      const tv = this.tv.results

      if (movies && tv) {
        if (this.types === 'movie') {
          return movies.sort((a, b) => {
            return a.release_date - b.release_date
          }).slice(null, 10)
        } else if (this.types === 'tv') {
          return tv.map(e => ({
            ...e,
            original_title: e.original_name,
            release_date: e.first_air_date
          })).sort((a, b) => {
            return a.release_date - b.release_date
          }).slice(null, 10)
        } else {
          const rebaseTV = tv.map(e => ({
            ...e,
            original_title: e.original_name,
            release_date: e.first_air_date
          }));
          return movies.concat(rebaseTV).sort((a, b) => {
            return a.release_date - b.release_date
          }).slice(null, 10)
        }
      }
    }
  },
  created () {
    this.load()
  },
  methods: {
    moment,
    ...mapActions({
      loadMovies: 'movies/loadMovies',
      loadTV: 'movies/loadTV'
    }),
    load () {
      const year = this.defaultYear
      this.loadMovies({year})
      this.loadTV({year})
    },
    sortByType (type) {
      // console.log(type)
      this.types = type
    },
    sortList () {
      const years = this.years ? this.years : this.defaultYear
      this.loadMovies({
        year: years
      })
      this.loadTV({
        year: years
      })
    },
    showDetails (id) {
      console.log('id', id)
      this.$router.push({
        path: `movie/${id}`
      })
    }
  }
}
