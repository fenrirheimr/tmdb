// import moviesList from '../../../components/lib/moviesList/moviesList.vue'
// import moviesList from '../../../components/lib/moviesList/moviesList.vue'
// import * as partials from 'src/partials'

import { mapActions, mapGetters, mapState } from 'vuex'
import moment from 'moment'

export default {
  components: {
  },
  data () {
    return {
      imageUrl: 'https://image.tmdb.org/t/p/w342',
    }
  },
  computed: {
    ...mapGetters({
      movie: 'movies/movie'
    }),
    ...mapState({
    })
  },
  created () {
    this.getMovieById({id: this.$route.params.id})
    // console.log('items', )
  },
  methods: {
    moment,
    ...mapActions({
      getMovieById: 'movies/getMovieById'
    }),
    goBack () {
      this.$router.push({
        path: '/'
      })
    }
  },
  mounted () {
    console.log('this.movie', this.movie)
  }
}
