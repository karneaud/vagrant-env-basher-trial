import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import App from './components/app'

Vue.use(Resource)
Vue.use(Router)

const route = new Router()

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
