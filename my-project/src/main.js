import Vue from 'vue'
import App from './App'
import store from "./store"
Vue.prototype.$store = store

var getPage = function getCurrentPageUrlWithArgs() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const url = currentPage.route
    const options = currentPage.options
    let urlWithArgs = `/${url}?`
    for (let key in options) {
      const value = options[key]
      urlWithArgs += `${key}=${value}&`
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
    return urlWithArgs
}

Vue.prototype.$getPage = getPage
  

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount(

)
