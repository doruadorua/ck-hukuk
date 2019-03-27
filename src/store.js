import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isSaved: ''
    },
    getters: {
        getSaved(state){
            return state.isSaved
        }
    },
    mutations: {
        updateSaved(state, value){
            return state.isSaved = value
        }
    },
    actions: {

    }
})