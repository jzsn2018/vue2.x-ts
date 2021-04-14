/*
 * @Date: 2021-04-13 17:22:23
 * @LastEditors: Timothy
 * @LastEditTime: 2021-04-14 15:46:02
 * @Description:
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/login',
        component: () => import('@/views/login/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
