import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

export default ({ Vue }) => {
  Vue.use(Vuetify)
  return new Vuetify({
    icons: {
      iconfont: 'mdi'
    }
  })
}
