import Vue from 'vue'
import Vuex from 'vuex'

import shoptool from '../utils/shoptool'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {
        getGoodsData(){
            return shoptool.getShop()
        }
    },
    mutations: {
        AddToCart(state,payload){
            shoptool.addUpdate(payload)
        }
    },
    actions: {}
})
