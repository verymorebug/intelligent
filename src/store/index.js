import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultList:[],
    image:''
  },
  getters: {
    getResultList(state){
      return state.resultList;
    },

    getImage(state){
      return state.image;
    }
  },
  mutations: {
    setResultList(state,list){ state.resultList = list; },
    setImage(state,image){ state.image = image; }
  },
  actions: {
  },
  modules: {
  }
})
