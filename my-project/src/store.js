// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    longitude:"",
    latitude:""
  },
  mutations: {
    increment: (state) => {
      console.log(state)
    },
    decrement: (state) => {
      console.log(state)
    }
  }
})

export default store
