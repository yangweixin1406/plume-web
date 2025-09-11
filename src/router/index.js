import Vue from 'vue'
import Router from 'vue-router'
// import Layout from "@/layout"
import { setToken } from '@/util/auth.js'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
  ]
})

router.beforeEach((to, from, next) => {
  const { token } = to.query
  if (token) {
    localStorage.setItem('token', token)
    setToken(token)
  }
  next()
})

export default router