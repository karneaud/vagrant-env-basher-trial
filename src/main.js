import Vue from 'vue'
import resource from 'vue-resource'
import router from 'vue-router'
import App from './components/app'

Vue.use(resource)
Vue.use(router)

const route = new router()

// Pointing routes to the components they should use
route.map({
  '/app': {
    component: App
  }
})

// Any invalid route will redirect to home
route.redirect({
  '*': '/app'
})

route.start(App, '#section')
