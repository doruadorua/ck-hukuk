import Vue from 'vue'
import VueRouter from 'vue-router'
import AppTr from './AppTr.vue'
import AppEng from './AppEng.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: AppTr},
    {path: '/eng', component: AppEng},
    {path: '*', redirect: '/'}
]

export const router = new VueRouter({
    mode: 'history',
    routes: routes
})